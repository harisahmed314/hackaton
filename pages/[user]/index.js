import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../componenets/Header";

export default function Dashboard() {
    const router = useRouter();
    const name = router.query.user;
    const [showBlogForm, setShowBlogForm] = useState(false);
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [message, setMessage] = useState('');  // To show messages to the user

    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const [editingBlogId, setEditingBlogId] = useState(null);
    const [userBlogs, setUserBlogs] = useState([]);

    // Check for authentication
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");

        if (!isLoggedIn || isLoggedIn !== "true") {
            router.push('/login');
        }
    }, []);




    const fetchUserBlogs = () => {
        fetch('/api/getUserBlogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: name })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setUserBlogs(data.blogs);
                } else {
                    setMessage(data.message);
                }
            })
            .catch(err => {
                console.error(err);
                setMessage('An error occurred while fetching the blogs.');
            });
    }






    const handleDeleteBlog = (index) => {
        if (index >= userBlogs.length || index < 0) {
            console.error("Invalid blog index");
            return;
        }
    
        const blogToDelete = userBlogs[index];
    
        fetch('/api/deleteBlog', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: name, 
                title: blogToDelete.title,
                content: blogToDelete.content
            })
            
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const updatedBlogs = userBlogs.filter((_, idx) => idx !== index);
                    setUserBlogs(updatedBlogs);
                    setMessage('Blog deleted successfully');
                    fetchUserBlogs();
                } else {
                    setMessage(data.message);
                }
            })
            .catch(err => {
                console.error(err);
                setMessage('An error occurred while deleting the blog.');
            });
    }
    


    const startEditing = (index) => {
        console.log("Starting edit for blog with index:", index);
        const blog = userBlogs[index];
        setEditingBlogId(index);  // Use the index temporarily
        setEditTitle(blog.title);
        setEditContent(blog.content);
    };


    const cancelEditing = () => {
        setEditingBlogId(null);
        setEditTitle('');
        setEditContent('');
    };
    const updateBlog = () => {
        fetch('/api/updateBlog', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: name, title: editTitle, content: editContent })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setMessage('Blog updated successfully');
                    setEditingBlogId(null); // To hide the edit form
                    setEditTitle('');
                    setEditContent('');
    
                    // Fetch the updated list of blogs.
                    fetchUserBlogs();
                } else {
                    setMessage(data.message);
                }
            })
            .catch(err => {
                console.error(err);
                setMessage('An error occurred while updating the blog.');
            });
    }
    const submitBlog = () => {
        fetch('/api/saveblog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: name, title: blogTitle, content: blogContent})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setMessage('Blog saved successfully');
                setBlogTitle('');
                setBlogContent('');
            } 
        })
        .catch(err => {
            console.error(err);
            setMessage('An error occurred.');
        });
    }





    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <h1 className="text-2xl font-semibold">Welcome, {name ? name : "Loading..."}</h1>
                        <div className="divide-y divide-gray-200">
                            <p className="mt-6 text-indigo-600 text-lg">This is your user dashboard.</p>
                            <div className="mt-8 flex flex-col space-y-4">
                                <button onClick={() => setShowBlogForm(!showBlogForm)} className="px-5 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none">
                                    {showBlogForm ? "Close Form" : "Add Blogs"}
                                </button>

                               {showBlogForm && (
                                    <div className="mt-4">
                                        <input 
                                            type="text" 
                                            value={blogTitle}
                                            onChange={(e) => setBlogTitle(e.target.value)}
                                            placeholder="Blog Title" 
                                            className="px-4 py-2 border rounded mb-2 w-full" 
                                        />
                                        <textarea 
                                            value={blogContent}
                                            onChange={(e) => setBlogContent(e.target.value)}
                                            placeholder="Blog Content" 
                                            className="px-4 py-2 border rounded w-full h-40 mb-2"
                                        ></textarea>
                                        <button 
                                            onClick={submitBlog}
                                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-md"
                                        >
                                            Add
                                        </button>
                                        {message && <p className="mt-4 text-red-500">{message}</p>}
                                    </div>
                                )}

                                <button onClick={fetchUserBlogs} className="px-5 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
                                    Show My Blogs
                                </button>

                                {userBlogs.map((blog, index) => (
                                    <div key={index} className="mt-4 border p-4 rounded">
                                        {editingBlogId === index ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    value={editTitle}
                                                    onChange={(e) => setEditTitle(e.target.value)}
                                                    className="px-4 py-2 border rounded mb-2 w-full"
                                                />
                                                <textarea
                                                    value={editContent}
                                                    onChange={(e) => setEditContent(e.target.value)}
                                                    className="px-4 py-2 border rounded w-full h-40 mb-2"
                                                ></textarea>
                                                <button onClick={updateBlog} className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md">Save</button>
                                                <button onClick={cancelEditing} className="ml-4 bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-md">Cancel</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <h2 className="text-xl font-bold">{blog.title}</h2>
                                                <p>{blog.content}</p>
                                                <button onClick={() => handleDeleteBlog(index)} className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">Delete</button>
                                                <button onClick={() => startEditing(index)} className="ml-4 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md">Edit</button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import React, { useState, useEffect } from 'react';

const BlogCard = ({ blogger, blog, onLearnMore }) => {
    return (
        <div key={blog.date} className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 bg-gray-400 flex flex-col justify-between">
                <div>
                    <h2 className="mb-2 text-lg title-font font-semibold text-black">{blog.title}</h2>
                    <p className="leading-relaxed text-base mb-3">{blog.content}</p>
                    <p className="leading-relaxed mb-3 text-sm font-medium">BY:{blogger.email}</p>
                    <p className="text-xs text-gray-700">{new Date(blog.date).toLocaleDateString()}</p>
                </div>
                <button className="mt-4 bg-blue-500 text-white py-1 px-2 rounded focus:outline-none hover:bg-blue-600" onClick={() => onLearnMore(blogger)}>Learn More</button>
            </div>
        </div>
    );
};

const Allblogs = () => {
    const [bloggers, setBloggers] = useState([]);
    const [selectedBlogger, setSelectedBlogger] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/bloggerdata');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBloggers(data.data); 
            } catch (error) {
                console.log("There was a problem with the fetch operation:", error.message);
            }
        };

        fetchData();
    }, []);

    const sortedBlogs = (blogger) => {
        return (blogger.blogs || []).sort((a, b) => new Date(b.date) - new Date(a.date));
    };

    return (
        <section className="text-gray-600 body-font bg-gray-100">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {selectedBlogger ? 
                        sortedBlogs(selectedBlogger).map(blog => <BlogCard key={blog.date} blogger={selectedBlogger} blog={blog} />) :
                        bloggers.flatMap(blogger => 
                            sortedBlogs(blogger).map(blog => <BlogCard key={blog.date} blogger={blogger} blog={blog} onLearnMore={setSelectedBlogger} />)
                        )
                    }
                </div>
                {selectedBlogger && (
                    <div className="text-center my-4">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setSelectedBlogger(null)}
                        >
                            Go back to all bloggers
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Allblogs;

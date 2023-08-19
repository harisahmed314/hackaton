import React, { useState, useEffect } from 'react';

const Allblogs = () => {
    const [bloggers, setBloggers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/bloggerdata');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBloggers(data.data);  // assuming that the actual data is inside a "data" property
            } catch (error) {
                console.log("There was a problem with the fetch operation:", error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {bloggers && bloggers.flatMap(blogger => 
                        blogger.blogs.map(blog => (
                            <div key={blog.date} className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-300 hover:border-gray-400 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                    <div className="p-6 bg-gray-700">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-pink-500 mb-1">{blog.title}</h2>
                                        <p className="leading-relaxed text-white mb-3">{blog.content}</p>
                                        <p className="text-gray-400 text-sm">{new Date(blog.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
    

export default Allblogs;

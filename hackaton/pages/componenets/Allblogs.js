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
        <section className="text-gray-600 body-font bg-gray-100">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {bloggers.flatMap(blogger =>
                        (blogger.blogs || []).sort((a, b) => new Date(b.date) - new Date(a.date)).map(blog => (
                            <div key={blog.date} className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <div className="p-6 bg-gray-400 flex flex-col justify-between">
                                        <div>
                                            <h2 className="mb-2 text-lg title-font font-semibold text-black">Title:{blog.title}</h2>
                                            <p className="leading-relaxed text-base mb-3">Content:{blog.content}</p>
                                            <p className="leading-relaxed mb-3 text-sm font-medium">BY:{blogger.email}</p>
                                            <p className="text-xs text-gray-700">Date:{new Date(blog.date).toLocaleDateString()}</p>
                                        </div>
                                        <a className="mt-2 text-white inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded px-3 py-1 transition duration-300 ease-in-out">
                                            Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}


export default Allblogs
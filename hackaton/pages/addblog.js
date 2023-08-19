import React, { useState } from 'react';

export default function BlogInput() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the blog submission logic here.
        console.log({ title, content });
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
                <h2 className="text-2xl mb-4 font-bold text-center">Add a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="blog-title">
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="blog-title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter blog title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="blog-content">
                            Content
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                            id="blog-content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter blog content"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="blog-image">
                            Upload Image (Optional)
                        </label>
                        <input type="file" id="blog-image" />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Submit Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

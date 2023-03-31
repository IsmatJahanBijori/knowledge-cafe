import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import BlogCart from '../BlogCart/BlogCart';

const Blogs = ({ handleReadTime }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <div>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id} handleReadTime={handleReadTime} ></Blog>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;
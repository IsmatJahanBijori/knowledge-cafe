import React, {useState, useEffect} from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs]=useState([])

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div  className='flex justify-between'>
        <div>
            {
                blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
            }
        </div>
        <div>
        <h1>Blog cart</h1>
        </div>
        </div>
    );
};

export default Blogs;
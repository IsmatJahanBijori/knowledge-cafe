import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const BlogCart = ({readTime, cart}) => {
    const [readingTime, setReadingTime] = useState(readTime);

    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setReadingTime(getReadTime);
    }, [readTime]);

    let quantity=0
    for(const blog of cart){
        blog.quantity=blog.quantity||1
        quantity=quantity+blog.quantity
    }
    return (
        <div className='m-10'>
            <div className='text-center pb-5 bg-violet-100' style={{ color: "indigo", border: "2px solid indigo", borderRadius: "5px" }}>
                <p className='text-3xl font-semibold my-5 p-3'>Spent time on reading: </p>
                <input style={{ border: "1px solid indigo", padding: "5px", borderRadius: "5px" }} type="text" value={readingTime} disabled />
            </div>
            <div className="mt-5">
                <h1 className='text-3xl font-semibold'>Bookmarked blogs: {quantity}</h1>
                

            </div>
        </div>
    );
};
export default BlogCart;
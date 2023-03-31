import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const BlogCart = ({readTime}) => {
    const [readingTime, setReadingTime] = useState(readTime);

    // newadded
    // const cart = props.cart
    // let quantity = 0;

    // for (const blog of cart) {
    //     blog.quantity = blog.quantity || 1;
    //     quantity = quantity + blog.quantity
    // }
    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setReadingTime(getReadTime);
    }, [readTime]);
    return (
        <div className='m-10'>
            <div className='text-center pb-5 bg-violet-100' style={{ color: "indigo", border: "2px solid indigo", borderRadius: "5px" }}>
                <p className='text-3xl font-semibold my-5 p-3'>Spent time on reading: </p>
                <input style={{ border: "1px solid indigo", padding: "5px", borderRadius: "5px" }} type="text" value={readingTime} disabled />
            </div>
            <div className="mt-5">
                <h1 className='text-3xl font-semibold'>Bookmarked blogs: {Blog.length}</h1>

            </div>
        </div>
    );
};

// <input style={{border: "1px solid indigo", padding:"5px", borderRadius:"5px"}} type="text" value={bookingMark} disabled />
//  <h2 className='font-bold text-2xl px-10 py-5' style={{ border: "2px solid purple", backgroundColor: "#B0DAFF" }}>Spent time on read: 0 min</h2>
export default BlogCart;
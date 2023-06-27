import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import BlogCart from '../BlogCart/BlogCart';
import { addToDb, getBookCart } from '../../../utilities/fakeDB.js'

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const [readTime, setReadTime] = useState(0);
    const [cart, setCart] = useState([])
    const handleReadTime = (time) => {
        let previousReadTime = localStorage.getItem("readTime");
        previousReadTime = parseInt(previousReadTime)
        // console.log( previousReadTime)
        if (previousReadTime) {
            let totalTime = previousReadTime + parseInt(time);
            totalTime = parseInt(totalTime)
            console.log(totalTime)
            localStorage.setItem("readTime", totalTime);
            setReadTime(totalTime);
        } else {
            localStorage.setItem("readTime", parseInt(time));
            setReadTime(parseInt(time));
        }


    };
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBookMark = (blog) => {
        const newCart = [...cart, blog]
        setCart(newCart)
        addToDb(blog.id)
    }

    useEffect(() => {
        const storedCart = getBookCart()
        // console.log(storedCart)
        const savedCart=[]
        for (const id in storedCart) {

            const addedBlog = blogs.find(blog => blog.id === id);


            if (addedBlog) {
                const quantity = storedCart[id]
                addedBlog.quantity = quantity
                savedCart.push(addedBlog)
            }
        }

        setCart(savedCart)
    }, [blogs])

    return (
        <div className='flex flex-col md:flex md:flex-row md:justify-around '>
            <div className='mx-20 grid grid-cols-1 md:grid-cols-2'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id} handleReadTime={handleReadTime} handleBookMark={handleBookMark}></Blog>)
                }
            </div>
            <div>
                <BlogCart readTime={readTime} cart={cart}></BlogCart>
            </div>

        </div>
    );
};

export default Blogs;
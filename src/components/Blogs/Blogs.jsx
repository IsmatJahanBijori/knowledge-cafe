import React, { useState, useEffect } from 'react';
import Blog from '../Blog/Blog';
import BlogCart from '../BlogCart/BlogCart';

const Blogs = ({ handleReadTime }) => {
    const [blogs, setBlogs] = useState([])


    // newadded
    // const [cart, setCart] = useState([])
    // const handleReadTime=props.handleReadTime
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    // newadded

    // useEffect(() => {
    //     const storedCart = getBookCart()
    //     // console.log(storedCart)
    //     const savedCart = []
    //     for (const id in storedCart) {
    //         // console.log(id)
    //         const addedProduct = blogs.find(blog => blog.id === id);
    //         // console.log(addedProduct)
    //         if (addedProduct) {
    //             const quantity = storedCart[id]
    //             addedProduct.quantity = quantity
    //             // console.log(addedProduct)
    //             savedCart.push(addedProduct)
    //             // console.log(savedCart)
    //         }
    //     }
    //     setCart(savedCart)
    // }, [blogs])
    // // button handling newadded
    // const handleAddToBookMark = (blog) => {
    //     // console.log(product)
    //     const newCart = [...cart, blog]
    //     setCart(newCart)
    //     addToDb(blog.id)
    // }
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
// handleAddToBookMark={handleAddToBookMark}
// <div>
// <BlogCart readTime={readTime} cart={cart}></BlogCart>
// </div>
export default Blogs;
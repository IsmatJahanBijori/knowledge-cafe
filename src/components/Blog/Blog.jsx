import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    const {count, author_name, blog_title, image, blog_cover, read_time, publish_date } = props.blog;
    const handleReadTime=props.handleReadTime
    // newadded
    // const handleAddToBookMark=props.handleAddToBookMark

    // style={{ width: "745px", height: "720px" }}
    return (
        <div className="card card-compact mt-10 w-96 mb-10 md:h-auto bg-base-100 shadow-xl mx-2 md:mx-20">
            <figure>
                <img className='w-full' src={blog_cover} alt="Blog Image" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <div>
                            <img className="w-10 rounded-full" src={image} alt="Profile User" />
                        </div>
                        <div>
                            <h4 className='font-semibold'>{author_name}</h4>
                            <p>{publish_date}</p>
                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div>
                        <p>{read_time} min read</p>
                        </div>
                        <div>
                        <button><FontAwesomeIcon icon={faBookmark} /></button>
                        </div>

                    </div>
                </div>
                <h2 className="card-title">{blog_title}</h2>
                <p>#beginner #programmers</p>
                <button onClick={()=>handleReadTime(read_time)} style={{ color: "blue", textDecoration: "underline" }} href="/mark as read">Mark as read</button>
            </div>
            <hr style={{border: "1px solid black"}} className='mt-3'/>
        </div>
    );
};
//  onClick={()=>handleAddToBookMark(props.blog)}
export default Blog;
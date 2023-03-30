import React from 'react';

const Blog = (props) => {
    const { author_name, blog_title, image, blog_cover, read_time, publish_date } = props.blog;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
            <figure>
                <img src={blog_cover} />
            </figure>
            <div className="card-body">

                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <h4 className='font-semibold'>{author_name}</h4>
                            <p>{publish_date}</p>
                        </div>
                    </div>
                    <div>
                        <p>{read_time}</p>
                    </div>
                </div>
                <h2 className="card-title">{blog_title}</h2>
                <p>#beginner #programmers</p>
                <a href="/mark as read">Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;
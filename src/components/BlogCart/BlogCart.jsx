import React, {useEffect, useState} from 'react';

const BlogCart = ({readTime}) => {
    const [readingTime, setReadingTime] = useState(readTime);
    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readTime");
        setReadingTime(getReadTimeFromStorage);
    }, [readTime]);
    return (
        <div className='m-10'>
            <div className='text-center'>
            <p className='text-2xl font-semibold text-center'>Spent time on reading: </p>
                <input type="text" value={readingTime} disabled />
            </div>
            <div>
                <h1>
                </h1>
            </div>
        </div>
    );
};
//  <h2 className='font-bold text-2xl px-10 py-5' style={{ border: "2px solid purple", backgroundColor: "#B0DAFF" }}>Spent time on read: 0 min</h2>
export default BlogCart;
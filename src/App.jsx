import React, { useState, useEffect } from 'react';
import BlogCart from './components/BlogCart/BlogCart';
import Blogs from './components/Blogs/Blogs';
import FooterQues from './components/FooterQues/FooterQues';
import Header from './components/Header/Header';

const App = () => {
  const [readTime, setReadTime] = useState(0);
  const handleReadTime = (time) => {
    let previousReadTime = localStorage.getItem("readTime");
    previousReadTime = parseInt(previousReadTime)
    // console.log(typeof previousReadTime)
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


  return (
    <div>
      <Header></Header>
      <div className='flex justify-around'>
        <div>
          <Blogs handleReadTime={handleReadTime}></Blogs>
        </div>
         <div>
          <BlogCart readTime={readTime}></BlogCart>
        </div>
      </div>
      <FooterQues></FooterQues>
    </div>
  );
};
// jodi notun system bhul hoy taile eikhan theke blogcart niye ei return e boshay dibo
// <div>
// <BlogCart readTime={readTime}></BlogCart>
// </div>
export default App;
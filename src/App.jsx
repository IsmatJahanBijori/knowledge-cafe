import React, { useState, useEffect } from 'react';
import BlogCart from './components/BlogCart/BlogCart';
import Blogs from './components/Blogs/Blogs';
import FooterQues from './components/FooterQues/FooterQues';
import Header from './components/Header/Header';

const App = () => {

  return (
    <div>
      <Header></Header>
      <div>
        <div>
          <Blogs></Blogs>
        </div>
      </div>
      <div>
        <FooterQues></FooterQues>
      </div>
    </div>
  );
};

export default App;
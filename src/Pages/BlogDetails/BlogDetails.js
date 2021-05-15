import React from 'react';
import Headbar from '../../Component/Header/Headbar';
import Navbar from '../../Component/Header/Navbar';
import Footer from '../../Component/Footer/Footer';
import Blog from '../../Component/Blog/Blog';

const BlogDetails = () => {
    return (
        <>
              <Headbar/>
         <Navbar/>
        <div className="appointment-banner">
             <div className="appointment-feature">
                 <div className="title">
                 <h1 className="">Blog</h1>
                 </div>
             </div>
             
        </div>
        <Blog/>   
       <Footer/>
        </>
    );
};

export default BlogDetails;
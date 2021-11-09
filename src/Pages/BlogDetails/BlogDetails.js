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
                 <h1 className="">ব্লগ </h1>
                 </div>
             </div>
             
            </div>
            <div className="mt-5"><Blog/></div>
         
       <Footer/>
        </>
    );
};

export default BlogDetails;
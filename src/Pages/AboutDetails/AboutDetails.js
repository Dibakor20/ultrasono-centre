import React from 'react';
import Headbar from '../../Component/Header/Headbar';
import Navbar from '../../Component/Header/Navbar';
import Footer from '../../Component/Footer/Footer';
import About from '../../Component/About/About';

const AboutDetails = () => {
    return (
        <>
         <Headbar/>
         <Navbar/>
        <div className="appointment-banner">
             <div className="appointment-feature">
                 <div className="title">
                 <h1 className="">About</h1>
                 </div>
             </div>
             
        </div>
        <About/>   
       <Footer/>
        </>
    );
};

export default AboutDetails;

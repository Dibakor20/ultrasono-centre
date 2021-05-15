import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Headbar from '../../Component/Header/Headbar';
import Navbar from '../../Component/Header/Navbar';
import Service from '../../Component/Seevice/Service';

const ServiceDetails = () => {
    return (
        <>
           <Headbar/>
         <Navbar/>
        <div className="appointment-banner">
             <div className="appointment-feature">
                 <div className="title">
                 <h1 className="">Services</h1>
                 </div>
             </div> 
        </div>
        <Service/>   
       <Footer/>
        </>
    );
};

export default ServiceDetails;
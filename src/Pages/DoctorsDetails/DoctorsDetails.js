import React from 'react';
import Headbar from '../../Component/Header/Headbar';
import Navbar from '../../Component/Header/Navbar';
import Footer from '../../Component/Footer/Footer';
import Doctors from '../../Component/Doctors/Doctors';

const DoctorsDetails = () => {
    return (
        <>
         <Headbar/>
         <Navbar/>
        <div className="appointment-banner">
             <div className="appointment-feature">
                 <div className="title">
                 <h1 className="">Doctors</h1>
                 </div>
             </div>
             
        </div>
          <Doctors/>
       <Footer/>   
        </>
    );
};

export default DoctorsDetails;
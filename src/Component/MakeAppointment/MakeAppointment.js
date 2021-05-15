import React from 'react';
import './MakeAppointment.css'
import doctor from '../../images/doctor.jpg'
import {Link} from 'react-router-dom'

const MakeAppointment = () => {
    return (
        <>
           <div className="service-form mb-5">
               <div className="container">
               <h5 className="text-white text-center text-uppercase mt-5">NEED A SPECIALLIST?</h5>
                <h1 className="my-4 text-center text-white">Make an Appointment <br/> Today</h1>
               <Link to="/appointment"><button className="main-button d-block mx-auto mb-5">MAKE AN APPOINTMENT</button></Link>
               </div>
           </div>
        </>
    );
};

export default MakeAppointment;
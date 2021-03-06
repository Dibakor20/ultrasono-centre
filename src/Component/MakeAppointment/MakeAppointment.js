import React from 'react';
import './MakeAppointment.css'
import doctor from '../../images/doctor.jpg'
import {Link} from 'react-router-dom'

const MakeAppointment = () => {
    return (
        <>
           <div className="service-form mb-5">
               <div className="container">
               <p className="text-white text-center text-uppercase mt-5">একজন বিশেষজ্ঞের প্রয়োজন?</p>
                    <h4 className="my-4 text-center banner-title">অ্যাপয়েন্টমেন্ট বুকিং করুন</h4>
               <Link to="/appointment"><button className="main-button d-block mx-auto mb-5">বুক অ্যাপয়েন্টমেন্ট </button></Link>
               </div>
           </div>
        </>
    );
};

export default MakeAppointment;
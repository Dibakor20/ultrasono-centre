import React, { useEffect, useState } from 'react';
import './Doctors.css'

const doctors = [ 
    {
       img:"https://disin-react.hibootstrap.com/images/doctors/doctor2.jpg",
       name:"ডাঃটিটু চন্দ্র আচার্য্য",
       Position:"শিশুরোগ বিশেষজ্ঞ" 
    },
    {
        img:"https://disin-react.hibootstrap.com/images/doctors/doctor1.jpg",
        name: "ডাঃমীনাক্ষী দাস",
        Position:"শিশুরোগ বিশেষজ্ঞ" 
    },
   
]    

const Doctors = () => {
    const [doctor,setDoctor] = useState([])
       useEffect(()=>{
           setDoctor(doctors) 
       },[]) 
    return (
        <>
            <div className="container doctor">
                <p className="banner-semi-title text-center">চিকিৎসক</p>
               <h3 className="banner-title text-center mb-5">স্বাস্থ্যসেবা বিশেষজ্ঞ</h3>
               <div className="row">
                 {
                     doctor.map(dr=><div className="col-md-6">
                         <div className="doctor-item">
                             <div className="doctor-top">
                             <img src={dr.img} alt="" className="w-50"/>
                             </div>
                             <div className="doctor-bottom">
                                <h3>{dr.name}</h3>
                                <p>{dr.Position}</p>
                            </div>
                         </div>
                     </div>)
                 }
               </div>
           </div> 
        </>
    );
};

export default Doctors;
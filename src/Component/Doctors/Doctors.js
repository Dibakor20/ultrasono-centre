import React, { useEffect, useState } from 'react';
import './Doctors.css'

const doctors = [
    {
       img:"https://disin-react.hibootstrap.com/images/doctors/doctor2.jpg",
       name:"Dr.Titu Acharjee",
       Position:"CHILD PEDIATRIC" 
    },
    {
        img:"https://disin-react.hibootstrap.com/images/doctors/doctor1.jpg",
        name:"Dr.Meenakshi Das",
        Position:"CHILD PEDIATRIC" 
    },
    {
        img:"https://disin-react.hibootstrap.com/images/doctors/doctor2.jpg",
        name:"Dr.Titu Acharjee",
        Position:"CHILD PEDIATRIC" 
    }
]    

const Doctors = () => {
    const [doctor,setDoctor] = useState([])
       useEffect(()=>{
           setDoctor(doctors) 
       },[]) 
    return (
        <>
           <div className="container doctor">
               <h1 className="about-item mb-5">Meet Our Doctors</h1>
               <div className="row">
                 {
                     doctor.map(dr=><div className="col-md-4">
                         <div className="doctor-item">
                             <div className="doctor-top">
                             <img src={dr.img} alt="" className="w-100"/>
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
import React, { useEffect, useState } from 'react';
import './Doctors.css'

const doctors = [
    {
        img: "https://disin-react.hibootstrap.com/images/doctors/doctor2.jpg",
        name: "ডাঃটিটু চন্দ্র আচার্য্য",
        Position: "শিশুরোগ বিশেষজ্ঞ"
    },
    {
        img: "https://disin-react.hibootstrap.com/images/doctors/doctor1.jpg",
        name: "ডাঃমীনাক্ষী দাস",
        Position: "শিশুরোগ বিশেষজ্ঞ"
    },

]

const Doctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        setDoctor(doctors)
    }, [])
    return (
        <>
            <div className="container my-5">
                <p className="banner-semi-title text-center">চিকিৎসক</p>
                <h3 className="banner-title text-center mb-5">স্বাস্থ্যসেবা বিশেষজ্ঞ</h3>
                <div className="row justify-content-center">
                    {
                        doctor.map(dr => <div className="col-lg-5 col-sm-6 col-11 mb-3">
                            <div className="doctor-item">
                                <div>
                                    <img src={dr.img} alt="" className="w-100 rounded" />
                                </div>
                                <div className="doctor-bottom py-3">
                                    <h3 className='doctor-title'>{dr.name}</h3>
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
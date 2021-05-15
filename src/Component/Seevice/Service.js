import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/FakeData';
import Event from './Event';
import './Service.css'
import {Link} from "react-router-dom"


const Service = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        setServices(FakeData)
    },[])

    return (
        <>
            <div className="service-form service">
            <div className="container ">      
                    <h1 className="about-item mt-5 mb-5 text-center text-white">Our Services</h1>
                    <div className="row">

                {
                    services.map(event=><div className="col-md-4"><Event event={event}></Event></div>)
                }

                    </div>
                </div>
            </div> 
        </>
    );
};

export default Service;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Banner.css'
import {Link} from "react-router-dom"

const Banner = () => {
    return (
        <>
           <div className="banner">
           <div className="container">
            <div className="row">
                <div className="col-md-7">
                <div class="left-content">
                    <h3>Stay Home &<br/> Be Aware</h3>
                    <h4 className="mt-4">Dr. Titu Acharjee</h4>
                    <h4>MBBS,DMU & Child Pediatric</h4>
                   <Link to="/appointment"> <button className="btn btn-danger mt-4">Get Appointment</button></Link>
                </div>    
                </div>
                <div className="col-md-5">
                  
                </div>    
            </div>    
          </div>  
           </div> 
        </>
    );
};

export default Banner;
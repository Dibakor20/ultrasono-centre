import React from 'react';
import './Footer.css'
import logo from '../../images/logo.jpg'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="feature">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-3 mt-5">
                                <img src={logo} alt="" className="last"/>
                            </div>
                            <div className="col-md-3 mt-5">
                              <h5>GET IN TOUCH</h5>
                               <h6 className="mt-4">ADDRESS:</h6>
                               <p className="mt-3">Golapganj Chomoni,Rahaman<br/> CNG station opposite site</p>
                               <h6 className="mt-4">PHONE:</h6>
                               <p className="mt-2">+8801737019528</p>
                               <h6 className="mt-4">EMAIL:</h6>
                               <p className="mt-2">debakor10@gmail.com</p>
                             
                            </div>
                            <div className="col-md-3 mt-5">
                                <h5 className="mb-4">MEDICAL SERVICES</h5>
                                 <a href=""><p className="text-white">Our Doctors</p></a>
                                 <a href=""><p className="text-white">Departments</p></a>
                                 <a href=""><p className="text-white">Overview</p></a>
                                 <a href=""><p className="text-white">Gastroenterology</p></a>
                                 <a href=""><p className="text-white">Cardiology</p></a>
                                 <a href=""><p className="text-white">Pulmonology</p></a>
                               
                            </div>
                            <div className="col-md-3 mt-5">
                                <h5 className="mb-5">OPENING HOURS</h5>

                                <p>Sun-Thu 12:05 pm to 8:00 pm</p>
                                <p>Saturday 12:30 am to 9:00 pm</p>
                                <p>Friday Closed</p>
                                <p>Copyright @2021 Design & Developed by Debakor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
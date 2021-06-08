import React from 'react';
import './About.css'
import ultrasono from '../../images/ultrasono.jpg'

const About = () => {
    return (
        <>
         <div className="container about">
            <div className="row">
                <div className="col-lg-6">
                      <div className="about-left">
                          <img src={ultrasono} alt=""/>
                      </div>    
                </div>
                <div className="col-lg-6">
                    <h2 className="about-item">Golapganj Ultrasono Center</h2>
                    <p> The Golapganj Ultrasono Center has been set up on Zakiganj Road in Chaumuhani with the aim of improving the quality of medical services for the people of Golapganj.</p>
                    <p> All the arrangements of our center only to ensure maximum comfort to the patients. Come to Golapganj Ultrasono Center to update your physical condition in a pleasant and comfortable environment. Through health check-up, it is possible to get a basic idea of ​​the patient's problem, from which it is possible to start treatment from the initial stage of the patient's problem. Come to Golapganj Ultrasono Center to get this facility with maximum safety and comfort. </p>
                </div>
            </div>
        </div>   
        </>
    );
};

export default About;
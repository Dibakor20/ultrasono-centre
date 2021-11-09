import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './AppointmentForm.css'

const AppointmentForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory()
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [appointment,setAppointment] = useState([])

    const emailData = sessionStorage.getItem('email') 

    const onSubmit = data => {
        const appointmentDetails = {
            name:loggedInUser.displayName,
            email: emailData,
            shipment: data,
            "status": 'PENDING',
            time:new Date().toLocaleString()
        };
        fetch('https://murmuring-waters-32504.herokuapp.com/allAppointment',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(appointmentDetails)
        })    
        setAppointment(appointmentDetails)

            if(data){
                
                alert('You Have Appointmented Successfully')
                history.push('/dashboard')
            }        
    };


    return (
        <>
          <div className="container appointment">
              <div className="row">
                  <div className="col-md-6">
                  <div className="service-form">
                      <h1 className="banner-title">অ্যাপয়েন্টমেন্ট বুকিং করুন</h1>
                       <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" value={sessionStorage.getItem('displayName')} {...register("name", { required: true })} placeholder="নাম" className="form-control" />
                        {errors.name && <span className="text-danger">খালি ঘর পূরণ করুন</span>}

                    </div>
                   
                    <div className="form-group">
                        <input type="email"  value={ sessionStorage.getItem('email')} {...register("email", { required: true })} placeholder="ইমেইল" className="form-control" />
                        {errors.email && <span className="text-danger">খালি ঘর পূরণ করুন</span>}
                    </div>
                    <div className="form-group">
                        <input type="number" {...register("phone", { required: true })} placeholder="মোবাইল নাম্বার" className="form-control" />
                        {errors.phone && <span className="text-danger">খালি ঘর পূরণ করুন</span>}
                    </div>
                   
                    <div class="form-group">
                        
                        <select className="form-control" {...register("service", { required: true })} ><br/>
                        {errors.service && <span className="error">খালি ঘর পূরণ করুন</span>}
                        <option selected disabled>সেবা সমূহ</option>
                        <option>Ultrasonography</option> 
                        <option>Chember</option> 
                        <option>Others</option> 
                    </select>
                        </div>

                        <div className="form-group">
                        <input type="date" {...register("date", { required: true })} placeholder="Date" className="form-control" />
                        {errors.email && <span className="text-danger">খালি ঘর পূরণ করুন</span>}
                    </div>

                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" {...register("gender", { required: true })}>
                                <option disabled={true} value="Not set">পরিচয়</option>
                                <option value="Male">ছেলে</option>
                                <option value="Female">মেয়ে</option>
                                <option value="Not set">অন্যান্য</option>
                            </select>
                            {errors.gender && <span className="text-danger">খালি ঘর পূরণ করুন</span>}

                        </div>
                        <div className="col-4">
                            <input {...register("age", { required: true })} className="form-control" placeholder="বয়স" type="number" />
                            {errors.age && <span className="text-danger">খালি ঘর পূরণ করুন</span>}
                        </div>
                        <div className="col-4">
                            <input {...register("weight", { required: true })} className="form-control"  placeholder="ওজন" type="number" />
                            {errors.weight && <span className="text-danger">খালি ঘর পূরণ করুন</span>}
                        </div>
                    </div>

                    <div className="form-group ">
                        <button type="submit" className="btn btn-danger d-block mx-auto px-5 mt-5">জমা দিন</button>
                    </div>
                </form>
          </div> 
                  </div>
                  <div className="colmd-6">
                      <div className="appointment-item-two-right">
                    <div className="appointment-item-content">
                        <h2 className="banner-title">চেম্বার</h2>
                        <ul>
                            <li>
                                <p>শনিবার <span className="ml-5">সকাল ৯.০০ - রাত ৮.০০</span> </p> 
                            </li>
                            <li>
                                <p>রবিবার <span className="ml-5">সকাল ৯.০০ - রাত ৮.০০</span> </p> 
                            </li>
                            <li>
                                <p>সোমবার<span className="ml-5">সকাল ৯.০০ - রাত ৮.০০</span> </p> 
                            </li>
                            <li>
                                <p>মঙ্গলবার<span className="ml-5">সকাল ৯.০০ - রাত ৮.০০</span> </p> 
                            </li>
                            <li>
                                <p>বুধবার   <span className="ml-5">সকাল ৯.০০ - রাত ৮.০০</span> </p> 
                            </li>
                            <li>
                                <p>বৃহস্পতিবার<span className="ml-4">সকাল ৯.০০ - রাত ৮.০০</span> </p> 
                                    </li>
                            
                        </ul>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default AppointmentForm;
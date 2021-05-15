import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const GetServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory()
      
    const onSubmit = data => {
        const patientData ={
            name:data.name,
            email:data.email,
            adress:data.adress,
            phone: data.phone,
            problem:data.problem,

        }
        const url =`https://murmuring-waters-32504.herokuapp.com/addPatients`
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(patientData)
          })
          .then(res => {
            if(data){

              alert("Patient added Successfully")
             history.push('/patients')
            }
          })

    }
    return (
        <>
            <div className="manage-form mb-5">
                   <h3 className="">Add Patient</h3>
               <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

               <div className="input-group">
                        <input type="text" {...register("name", { required: true })} placeholder="Patient Name" className="inp-style" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="input-group">
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="inp-style" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="input-group">
                        <input type="text" {...register("adress", { required: true })} placeholder="Adress" className="inp-style" />
                        {errors.adress && <span className="text-danger">This field is required</span>}
                </div>
                <div className="input-group">
                        <input type="number" {...register("phone", { required: true })} placeholder="Phone No" className="inp-style" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                </div>
                <div className="input-group">
                        <input type="text" {...register("problem", { required: true })} placeholder="Patient Problem" className="inp-style" />
                        {errors.problem && <span className="text-danger">This field is required</span>}
                </div>

                <div className="input-group text-right">
                        <button type="submit" className="btn btn-danger mt-3">Add Pescription</button>
                </div>
               </form>
               </div> 
                  
        </>
    );
};

export default GetServices;
import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
        const adminData ={
            email:data.email,    
        }
        const url =`https://murmuring-waters-32504.herokuapp.com/addAdmin`

        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
          })
          .then(res => {
            if(data){
              alert("admin added Successfully")
              
            }
          })
    }
    return (
        <>
             <div className="order-form">
                   <h3>Make Admin</h3>
               <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="input-group">
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                
                <div className="input-group text-right">
                        <button type="submit" className="btn btn-danger mt-3">Add </button>
                    </div>
               </form>
               </div> 
        </>
    );
};

export default AddAdmin;
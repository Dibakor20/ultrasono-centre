import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddPescription.css'
import { useHistory } from 'react-router';

const AddPescription = () => {
    const [imageUrl,setImageUrl] = useState(null)
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const pescriptionData ={
            name:data.name,
            email:data.email,
            medicine:data.medicine,
            description:data.description,
            img:imageUrl,
        }
        const url =`https://murmuring-waters-32504.herokuapp.com/addPescription`
        console.log(pescriptionData)
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(pescriptionData)
          })
          .then(res => {
            if(data){

              alert("Pescription added Successfully")
             history.push('/pescriptionList')
            }
          })

    }


    const handleImageUpload = (event) =>{
        console.log(event.target.files[0])
        const imageData =new FormData()
        imageData.set('key', '70615785ffbafdc7dd120e546041a491')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }  

    return (
        <>
              <div className="manage-form mb-5">
                   <h3 className="font-family">Add Pescription</h3>
               <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

               <div className="input-group">
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="inp-style" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="input-group">
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="inp-style" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="input-group">
                        <input type="text" {...register("medicine", { required: true })} placeholder="Medicine" className="inp-style" />
                        {errors.medicine && <span className="text-danger">This field is required</span>}
                </div>
                <div className="input-group">
                        <input type="text" {...register("description", { required: true })} placeholder="Description" className="inp-style" />
                        {errors.description && <span className="text-danger">This field is required</span>}
                </div>

                <input name="file"  type="file" onChange={handleImageUpload} /><br/>
                {errors.file && <span style={{color:'red'}}>This field is required</span>}<br/>

                <div className="input-group text-right">
                        <button type="submit" className="btn btn-danger mt-3">Add Pescription</button>
                </div>
               </form>
               </div> 
        </>
    );
};

export default AddPescription;
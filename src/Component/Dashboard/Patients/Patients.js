import React, { useState } from 'react';

const Patients = () => {
    const[patientList,setPatientList] = useState([])
    
    const loadAll = () =>{
        fetch('https://murmuring-waters-32504.herokuapp.com/patientsList')
        .then(res=>res.json())
        .then(data=>setPatientList(data))
     }
    if (patientList.length === 0) {
        loadAll();
    }


    const deletePatient =(id) =>{
        fetch(`https://murmuring-waters-32504.herokuapp.com/deletePatient/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                   loadAll()
                }
            })
    }
    return (
        <>
            <div className="container">
             <div className="AllAppointment-form">
                 <h1 className="font-family mt-3">All Patients</h1>

                 <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Adress</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                    {
                         patientList.length === 0 && <div className="spinner-border d-block mx-auto mt-5" role="status">
                         <span class="sr-only">Loading...</span>
                            </div>        
                    }

                    {
                        patientList.map(Patient=>
                            <tr key={Patient._id}>
                                <td><h5 className="font-family">{Patient.name}</h5></td>
                                <td><h5 className="font-family">{Patient.email}</h5></td>
                                <td><h5 className="font-family">{Patient.adress}</h5></td>
                                <td><h5 className="font-family">{Patient.phone}</h5></td>
                                <td> <button onClick={()=>deletePatient(`${Patient._id}`)} className="p-1 p-sm-2 btn btn-danger">
                                        <i className="far fa-trash-alt"></i>
                                    </button> </td> 
                            </tr>    

                      )
                    }
                    </tbody>
                    </table>

             </div>
         </div> 
        </>
    );
};

export default Patients;
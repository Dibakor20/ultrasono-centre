import React, { useEffect, useState } from 'react';

const AppointmentList = () => {


    const[appointmentList,setAppointmentList] = useState([])
    
    const loadAll = () =>{
        fetch('https://murmuring-waters-32504.herokuapp.com/appointmentList')
        .then(res=>res.json())
        .then(data=>setAppointmentList(data))
     }
    if (appointmentList.length === 0) {
        loadAll();
    }

    return (
        <>
         <div className="container">
             <div className="AllAppointment-form">
                 <h1 className="font-family mt-3">All Appointment</h1>

                 <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Service</th>
                        <th scope="col">Date</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Status</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                    {
                         appointmentList.length === 0 && <div className="spinner-border d-block mx-auto mt-5" role="status">
                         <span class="sr-only">Loading...</span>
                            </div>        
                    }

                    {
                        appointmentList.map(appointment=>
                            <tr key={appointment._id}>
                                <td><h5 className="font-family">{appointment.shipment.name}</h5></td>
                                <td><h5 className="font-family">{appointment.shipment.service}</h5></td>
                                <td><h5 className="font-family">{appointment.shipment.date}</h5></td>
                                <td><h5 className="font-family">{appointment.shipment.gender}</h5></td>
                                <td><h5 className="font-family">{appointment.shipment.weight}</h5></td>
                                <td><h5 className="badge badge-primary">panding</h5></td>
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

export default AppointmentList;
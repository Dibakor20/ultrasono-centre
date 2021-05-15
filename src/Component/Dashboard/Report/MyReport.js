import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const MyReport = () => {
    const [report,setReport] =useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const emailData = sessionStorage.getItem('email')

    useEffect(()=>{
        fetch('http://localhost:5000/myPescription?email='+ emailData)
        .then(res=>res.json())
        .then(data=> setReport(data))
      
    },[emailData, setReport])
    return (
        <>
             <div className="container">
             <div className="AllAppointment-form">
                 <h1 className="font-family mt-3">My Pescription</h1>

                 <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Medicine</th>
                        <th scope="col">description</th>
                        <th scope="col">Report</th>
                        <th scope="col">Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>

                    {
                         report.length === 0 && <div className="spinner-border d-block mx-auto mt-5" role="status">
                         <span class="sr-only">Loading...</span>
                            </div>        
                    }

                    {
                        report.map(myPescription=>
                            <tr key={myPescription._id}>
                                <td><h5 className="font-family">{myPescription.name}</h5></td>
                                <td><h5 className="font-family">{myPescription.email}</h5></td>
                                <td><h5 className="font-family">{myPescription.medicine}</h5></td>
                                <td><h5 className="font-family">{myPescription.description}</h5></td>
                                <td><img src={myPescription.img} alt="" className="report" /></td>
                
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

export default MyReport;
import React, { useState } from 'react';
import './PescriptionList.css'

const PescriptionList = () => {
    const[pescriptionList,setPescriptionList] = useState([])
    
    const loadAll = () =>{
        fetch('http://localhost:5000/pescriptionList')
        .then(res=>res.json())
        .then(data=>setPescriptionList(data))
     }
    if (pescriptionList.length === 0) {
        loadAll();
    }

   
    const deletePescription =(id) =>{
        console.log()
        fetch(`http://localhost:5000/deletePescription/${id}`, {
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
                 <h1 className="font-family mt-3">All Pescription</h1>

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
                         pescriptionList.length === 0 && <div className="spinner-border d-block mx-auto mt-5" role="status">
                         <span class="sr-only">Loading...</span>
                            </div>        
                    }

                    {
                        pescriptionList.map(pescription=>
                            <tr key={pescription._id}>
                                <td><h5 className="font-family">{pescription.name}</h5></td>
                                <td><h5 className="font-family">{pescription.email}</h5></td>
                                <td><h5 className="font-family">{pescription.medicine}</h5></td>
                                <td><h5 className="font-family">{pescription.description}</h5></td>
                                <td><img src={pescription.img} alt="" className="report" /></td>
                                <td> <button onClick={()=>deletePescription(`${pescription._id}`)} className="p-1 p-sm-2 btn btn-danger">
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

export default PescriptionList;
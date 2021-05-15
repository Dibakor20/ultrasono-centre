import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { faCog, faHome, faGripHorizontal, faPlus, faUsers,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const emailData = sessionStorage.getItem('email')

const Sidebar = () => {
    const [loggedInUser,setLoggedInUser, user, setUser] = useContext(UserContext);
    const [isAdmin,setIsAdmin] = useState(false)

    const loadAllAdmin = () => {
        fetch('https://murmuring-waters-32504.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email || emailData })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
            });
    }
    if(loadAllAdmin.length === 0){
        loadAllAdmin()
    }
  
    return (
        <>
        <nav class="navbar navbar-expand-lg sidebar col-md-2">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="list-unstyled dash">
        
               <li >
            <Link class="nav-link text-white" to="/dashboard"><i class="fas fa-grip-horizontal mr-3"></i>Dashboard</Link>
           </li>
           <li >
             <Link to="/appointmentList" class="nav-link text-white " ><i class="fas fa-calendar-check mr-3"></i>All Appointment</Link>
           </li>
           <li >
           {isAdmin &&  <Link to="/addPescription" class="nav-link text-white " ><i class="fas fa-plus-square mr-3"></i>Add Pescription</Link>}
           </li>
          
           <li >
           {isAdmin && <Link  class="nav-link text-white " to="/pescriptionList"><i class="fas fa-calendar-check mr-3"></i>All Pescription</Link>}
           </li>
           <li >
           {isAdmin && <Link to="/getServices" class="nav-link text-white"><i class="fas fa-plus-square mr-3"></i>Add Patients</Link>}
            </li>
           <li >
           {isAdmin && <Link class="nav-link text-white" to="/patients"><i class="fal fa-user mr-3"></i>All Patient</Link>}
           </li>
           <li >
           {isAdmin &&    <Link to="/addAdmin" class="nav-link text-white"><i class="fas fa-plus-square mr-3"></i>Add Admin</Link>}
            </li>
          
             <li >
             {!isAdmin &&   <Link  class="nav-link text-white " to="/report"><i class="fas fa-calendar-check mr-3"></i>My Pescription</Link>}
           </li>
           <li >
           {!isAdmin &&  <Link  class="nav-link text-white " to="/appointment"><i class="fas fa-calendar-check mr-3"></i>Appointment</Link>}
           </li>
            <li >
                <Link to="/home" class="nav-link text-white"><i class="fad fa-home mr-3"></i> Home</Link>
            </li>

        
          
            </ul>
        </div>
        </nav>
        </>
    );
};

export default Sidebar;
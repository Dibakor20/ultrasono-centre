import React, { useContext } from 'react';
import './Navbar.css'
import {Link, useHistory, useLocation} from "react-router-dom"
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser,setLoggedInUser, user, setUser] = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();

    const signOut = () => {
        const logout = window.confirm('Are you sure you want to Log Out?');
        if (logout) {
            const updateUser = {
                isSignedIn: false,
                name:'',
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                success: false,
                error: '',
                newUser: false
            }
            setLoggedInUser(updateUser);
            setUser(updateUser);
            sessionStorage.setItem('email', '')
            sessionStorage.setItem('displayName', '')
            history.push('/');
        }
    }
    return (
        <>
          <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/home">Golapgonj Ultrasono Centre</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/aboutDetails" class="nav-link" href="#">About</Link>
                </li>
                <li class="nav-item">
                    <Link to="/doctorsDetails" class="nav-link" href="#">Doctors</Link>
                </li>
                <li class="nav-item">
                    <Link to="/blogDetails" class="nav-link" href="#">Blog</Link>
                </li>
                <li class="nav-item">
                    <Link to="/serviceDetails" class="nav-link" href="#">Services</Link>
                </li>
             
                <li class="nav-item ml-4 mr-3">
                    {sessionStorage.getItem('email') &&    <Link class="nav-link" to="/dashboard">Dashboard</Link>}
                    </li>
                <li class="nav-item">
                {
                    sessionStorage.getItem('email') ? <button title="Click to LogOut" className="btn log" onClick={signOut}> {sessionStorage.getItem('email')}</button> : <Link className="btn log" to="/login">LogIn</Link>
                        }
                </li>
                </ul>
                
            </div>
            </nav> 
          </div>
        </>
    );
};

export default Navbar;
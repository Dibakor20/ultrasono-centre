import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Appointment from './Pages/Booking/Appointment';
import Login from './Pages/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Pages/AdminDashboard/Dashboard';
import AllAppointment from './Component/Dashboard/AppointmentList/AllAppointment';
import Pescription from './Component/Dashboard/AppointmentList/Pescription/Pescription';
import AllPescription from './Component/Dashboard/AppointmentList/Pescription/AllPescription';
import AllServices from './Component/Dashboard/AllServices/AllServices';
import AllPatients from './Component/Dashboard/Patients/AllPatients';
import Report from './Component/Dashboard/Report/Report';
import Admin from './Component/Dashboard/Admin/Admin';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AboutDetails from './Pages/AboutDetails/AboutDetails';
import DoctorsDetails from './Pages/DoctorsDetails/DoctorsDetails';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    success: false,
    error: '',
    newUser: false
  })
  if (loggedInUser.email) {
    sessionStorage.setItem('email', loggedInUser.email);
  }
  if (loggedInUser.displayName) {
    sessionStorage.setItem('displayName', loggedInUser.displayName);

  }
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, user, setUser,]}>
     <Router>
       <Switch>
         <Route path="/home">
           <Home/>
         </Route>
         <Route path="/appointment">
           <Appointment/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/aboutDetails">
           <AboutDetails/>
         </Route>
         <Route path="/doctorsDetails">
           <DoctorsDetails/>
         </Route>
         <Route path="/blogDetails">
           <BlogDetails/>
         </Route>
         <Route path="/serviceDetails">
           <ServiceDetails/>
         </Route>
         <Route path="/dashboard">
           <Dashboard/>
         </Route>
         <PrivateRoute path ="/appointmentList">
          <AllAppointment/>
         </PrivateRoute>
         <PrivateRoute path="/addPescription">
          <Pescription/>
         </PrivateRoute>
         <PrivateRoute path="/PescriptionList">
           <AllPescription/>
         </PrivateRoute>
         <PrivateRoute path="/getServices">
           <AllServices/>
         </PrivateRoute>
         <PrivateRoute path="/patients">
           <AllPatients/>
         </PrivateRoute>
         <PrivateRoute path ="/report">
           <Report/>
         </PrivateRoute>
         <PrivateRoute path="/addAdmin">
           <Admin/>
         </PrivateRoute>
         <Route path="/">
           <Home/>
         </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;

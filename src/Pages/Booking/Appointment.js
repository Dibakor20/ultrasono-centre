import React from 'react';
import AppointmentBanner from '../../Component/GetAppointment/AppointmentBanner';
import AppointmentForm from '../../Component/GetAppointment/AppointmentForm';
import Headbar from '../../Component/Header/Headbar';
import Navbar from '../../Component/Header/Navbar';
import Footer from '../../Component/Footer/Footer';

const Appointment = () => {
    return (
        <>
          <Headbar/>
          <Navbar/>
          <AppointmentBanner/>
          <AppointmentForm/>
          <Footer/>
        </>
    );
};

export default Appointment;
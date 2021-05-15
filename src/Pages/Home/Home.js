import React from 'react';
import About from '../../Component/About/About';
import Blog from '../../Component/Blog/Blog';
import DashboardInfo from '../../Component/Dashboard/DashboardInfo';
import Doctors from '../../Component/Doctors/Doctors';
import Footer from '../../Component/Footer/Footer';
import Banner from '../../Component/Header/Banner';
import Headbar from '../../Component/Header/Headbar';
import Navbar from '../../Component/Header/Navbar';
import MakeAppointment from '../../Component/MakeAppointment/MakeAppointment';
import Service from '../../Component/Seevice/Service';

const Home = () => {
    return (
        <>
          <Headbar/>
          <Navbar/>
          <Banner/>
          <About/>
          <Service/>
          <Doctors/>
          <MakeAppointment/>
          <Blog/>
          <Footer/>
        </>
    );
};

export default Home;
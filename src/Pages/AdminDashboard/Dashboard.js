import React from 'react';
import DashboardBody from '../../Component/Dashboard/DashboardBody/DashboardBody';
import DashboardInfo from '../../Component/Dashboard/DashboardInfo';
import Sidebar from '../../Component/Dashboard/Sidebar';

const Dashboard = () => {
    return (
        <>
           <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar/>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                  <DashboardInfo/>
                  <DashboardBody/>
                </div>
              
            </div>
        </section> 
        </>
    );
};

export default Dashboard;
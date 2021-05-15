import React from 'react';
import Sidebar from '../Sidebar';
import AddAdmin from './AddAdmin';

const Admin = () => {
    return (
        <>
            <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                  <Sidebar/>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                 <AddAdmin/>
                </div>
              
            </div>
        </section>    
        </>
    );
};

export default Admin;
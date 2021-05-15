import React from 'react';
import Sidebar from '../../Sidebar';
import PescriptionList from './PescriptionList';

const AllPescription = () => {
    return (
        <>
            <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                   <Sidebar/>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                 <PescriptionList/>
                </div>
              
            </div>
        </section>  
        </>
    );
};

export default AllPescription;
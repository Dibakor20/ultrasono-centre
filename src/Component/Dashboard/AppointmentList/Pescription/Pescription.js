import React from 'react';
import Sidebar from '../../Sidebar';
import AddPescription from './AddPescription';

const Pescription = () => {
    return (
        <>
            <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar/>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                 <AddPescription/>
                </div>
              
            </div>
        </section>   
        </>
    );
};

export default Pescription;
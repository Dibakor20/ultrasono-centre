import React from 'react';
import {Link} from 'react-router-dom'
import './Event.css'
const Event = (props) => {
    const {img,name,description} = props.event
    return (
        <>
            <Link to="/appointment"> <div class="card mb-5" >
            <img src={img} class="card-img-top" alt="..." className="service-img d-block mx-auto"/>
            <div class="card-body">
                <h5 class="card-title text-center">{name}</h5>
             <p class="card-text text-center">{description}</p>
            </div>
            </div></Link>
        </>
    );
};

export default Event;
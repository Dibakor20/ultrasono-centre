import React from 'react';
import { Link } from 'react-router-dom'
import './Event.css'
const Event = (props) => {
    const { img, name, description,} = props.event
    return (
        <div className='service-card mb-4'>
            <Link to="/appointment">
                <div class="card bottom h-100">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src={img} alt="" className="images" />
                    <div class="card-body text-dark">
                        <h5 class="card-title text-center font-weight-bold">{name}</h5>
                        <p class="card-text text-center">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Event;
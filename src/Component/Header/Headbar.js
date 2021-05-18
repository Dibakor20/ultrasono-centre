import React from 'react';
import './Headbar.css'

const Headbar = () => {
    return (
        <>
          <div className="container">
              <div className="row">
                  <div className="col-md-7 col-lg-8">
                    <div className="info">
                        <p className="mt-4 color"><i class="fas fa-phone-alt mr-2"></i> Call : 01737019528</p>
                        <p className="mt-4 color"><i class="fas fa-envelope-open mr-2"></i> debakor10@gmail.com</p>
                        <p className="mt-4 color"><i class="fas fa-map-marker-alt mr-2"></i>Golapgonj</p>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-4">

                  <div class="social-icon">
            <ul>
                <a href="" className="mr-2"><li><i class="fab fa-facebook-f"></i></li></a>
                <a href=""  className="mr-2"><li><i class="fab fa-twitter"></i></li></a>
                <a href=""  className="mr-2"><li><i class="fab fa-linkedin"></i></li></a>
                <a href=""  className="mr-2"><li><i class="fab fa-github"></i></li></a>
        </ul>
        </div>

                  </div>
              </div>
          </div>  
        </>
    );
};

export default Headbar;
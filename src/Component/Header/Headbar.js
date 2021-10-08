import React, { useEffect, useState } from "react";
import "./Headbar.css";
import logo from "../../images/logo.png";

const Headbar = () => {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);

  return (
    <>
      {/* <div className="row mx-5">
          <div className="col-md-5 col-lg-4 pb-2">
            <img src={logo} alt="" />
          </div>
    
            <div className="d-flex flex-column flex-md-row justify-content-md-end col-sm-6 col-md-7 col-lg-8">
            <i class="fas fa-phone-alt header-icon mt-3"></i> <p className="mt-2 px-md-4  color">
            <span className="header-title">  যোগাযোগ </span><br />
                ০১৭৩৭০১৯৫২৮
              </p>
              <i class="fas fa-map-marker-alt header-icon mt-3"></i>  <p className="mt-2 px-0 px-md-4 color">
              <span className="header-title"> ঠিকানা </span><br />
                গোলাপগঞ্জ,চমুনি
              </p>
              <i class="fas fa-clock header-icon mt-3"></i>   <p className="mt-2 px-md-4 px-0 color">
              <span className="header-title"> শনিবার - বৃহস্পতিবার </span><br />
                সকাল 12:30 থেকে রাত 9:00
              </p>
            </div>
          </div> */}

      <div className="row justify-content-center mx-md-5 mx-2 pb-2">
        {screenWidth > 767 && (
          <div className="col-lg-2 col-md-3 px-0">
            <img src={logo} className="w-50 d-block mx-auto mx-lg-0" alt="" />
          </div>
        )}

        <div className="col-md-9 col-lg-10">
          <div className="p-0 d-flex flex-wrap justify-content-lg-end justify-content-between px-0">
           
            <p className="mt-md-4 mt-2 px-md-3 mb-1 header-title text-center">
            <i class="fas fa-phone-alt header-icon"></i>{" "}
               ০১৭৩৭০১৯৫২৮ 
              
            </p>

            <p className="mt-md-4 mt-2 px-md-3 mb-1 header-title text-center">
            <i class="fas fa-map-marker-alt header-icon "></i> 
              গোলাপগঞ্জ,চমুনি
            </p>

            <p className="mt-md-4 mt-2 px-md-3 mb-1 text-center header-title">
            <i class="fas fa-clock header-icon"></i> শনিবার -
              বৃহস্পতিবার (১২:৩০ - ৯:00)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headbar;

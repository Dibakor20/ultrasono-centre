import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="feature">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-3 mt-5">
                                <img src={logo} alt="" className=" w-50"/>
                            </div>
                            <div className="col-md-3 mt-5">
                              <h5>যোগাযোগ করুন</h5>
                               <h6 className="mt-4">ঠিকানা:</h6>
                               <p className="mt-3">গোলাপগঞ্জ চমনি, রহমান<br/> সিএনজি স্টেশনের বিপরীতে</p>
                               <h6 className="mt-4">ফোন:</h6>
                               <p className="mt-2">০১৭৩৭০১৯৫২৮</p>
                               <h6 className="mt-4">ইমেইল:</h6>
                               <p className="mt-2">debakor10@gmail.com</p>
                             
                            </div>
                            <div className="col-md-3 mt-5">
                                <h5 className="mb-4">স্বাস্থ্য সেবাসমূহ</h5>
                                 <a href=""><p className="text-white">ডাক্তার</p></a>
                                 <a href=""><p className="text-white">বিভাগসমূহ</p></a>
                                 <a href=""><p className="text-white">ওভারভিউ</p></a>
                                 <a href=""><p className="text-white">গ্যাস্ট্রোএন্টারোলজি</p></a>
                                 <a href=""><p className="text-white">কার্ডিওলজি</p></a>
                                 <a href=""><p className="text-white">পালমোনোলজি</p></a>
                               
                            </div>
                            <div className="col-md-3 mt-5">
                                <h5 className="mb-5">খোলার সময়</h5>

                                <p>শনি-বৃহস্পতি সকাল ১১:০৫ থেকে রাত ৮:০০</p>
                               
                                <p>শুক্রবার বন্ধ</p>
                                <p>Copyright @2021 Design & Developed by Debakor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
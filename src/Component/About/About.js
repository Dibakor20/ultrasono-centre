import React from 'react';
import './About.css'
import ultrasono from '../../images/ultrasono.jpg'
import img1 from '../../images/shape1.png'
import img2 from '../../images/shape2.png'

const About = () => {
    return (
        <div className='about py-5'>
            <div className='about-bg'>
                <img src={img1} alt='about bg' />
                <img src={img2} alt='about bg' />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={ultrasono} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="banner-semi-title">আমাদের সম্পর্কে</p>
                        <h2 className="about-item">গোলাপগঞ্জ আলট্রাসোনো সেন্টার</h2>
                        <p>গোলাপগঞ্জের মানুষের চিকিৎসা সেবার মান উন্নয়নের লক্ষ্যে চৌমুহনির জকিগঞ্জ রোডে গোলাপগঞ্জ আল্ট্রাসোনো সেন্টার স্থাপন করা হয়েছে।</p>
                        <p>আমাদের কেন্দ্রের সকল ব্যবস্থা শুধুমাত্র রোগীদের সর্বোচ্চ আরাম নিশ্চিত করার জন্য। আনন্দদায়ক এবং আরামদায়ক পরিবেশে আপনার শারীরিক অবস্থা আপডেট করতে গোলাপগঞ্জ আল্ট্রাসোনো সেন্টারে আসুন। স্বাস্থ্য পরীক্ষা-নিরীক্ষার মাধ্যমে রোগীর সমস্যার প্রাথমিক ধারণা পাওয়া সম্ভব, যেখান থেকে রোগীর সমস্যার প্রাথমিক পর্যায় থেকে চিকিৎসা শুরু করা সম্ভব। সর্বোচ্চ নিরাপত্তা এবং স্বাচ্ছন্দ্যের সাথে এই সুবিধা পেতে গোলাপগঞ্জ আল্ট্রাসোনো সেন্টারে আসুন।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
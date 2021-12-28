import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Banner.css'
import { Link } from "react-router-dom"
import bg1 from '../../images/bg-4.jpg'
import bg2 from '../../images/bg-2.jpeg'
import bg3 from '../../images/bg-3.jpg'

const Banner = () => {
  return (
    <>

      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={bg2} class="d-block bg-w" alt="..." />
            <div class="carousel-caption d-md-block">
              <p className="banner-semi-title">হেল্‌থ কেয়ার সেন্টার </p>
              <h3 className="banner-title">বিশ্বাস এবং বন্ধুত্বপূর্ণ পেশাদার চিকিৎসা </h3>
              <p className="text-dark mt-3">আমদের আল্ট্রাসনো সেন্টার একটি অত্যাধুনিক, বিস্তীর্ণ স্বাস্থ্যসেবা <br />যেটি এই স্থানে প্রদান করা হয়ে থাকে। .</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={bg2} class="d-block bg-w" alt="..." />
            <div class="carousel-caption d-md-block">
              <p className="banner-semi-title">সেবাসমূহ </p>
              <h3 className="banner-title">আপনার হাসি এখান থেকে শুরু হোক</h3>
              <p className="text-dark mt-3">আমাদের আল্ট্রাসনো সেন্টার এর কর্মীবৃন্দ আপনার সমস্যা ও চাহিদা অনুযায়ী <br />হেলথ চেক-আপ প্রোগ্রামটি নির্ধারণে সহায়তা করবে।</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={bg2} class="d-block bg-w" alt="..." />
            <div class="carousel-caption d-md-block">
              <p className="banner-semi-title">গোলাপগঞ্জ আল্ট্রাসনো সেন্টার</p>
              <h3 className="banner-title">ডাঃ টিটু চন্দ্র আচার্য্য</h3>
              <p className="text-dark mt-3">এমবিবিএস, ডিএমইউ, এবং শিশুরোগ বিশেষজ্ঞ</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


    </>
  );
};

export default Banner;
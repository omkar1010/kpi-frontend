import React, { Component } from "react";
import Slider from "react-slick";
import "../../index.css";
import hero1 from "../../assets/pexels-lukas-577210.jpg";
import hero2 from "../../assets/newimges/pexels-lukas-669612.jpg"
import hero3 from "../../assets/newimges/kaleidico-7lryofJ0H9s-unsplash.jpg"
import {Link} from "react-router-dom";
import './hero.css'

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings} className="custom-dots">
          {/* container 1 Data */}
          <div className='w-full max-h-max bg-white p-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="text-data-container">
                    <div className="container">
                        <h2 className="h2-text-data ">Harness the Power of Data</h2>
                        <p className="para-text">Unlock insights, drive innovation, and make informed decisions with Sceniuz's comprehensive data solutions.</p>

                        <div className="btn-container mt-3">
                            <Link to="/data-analytics" className="btn-link-container"><span className="span-btn-text">Explore Our Services</span></Link>
                        </div>
                    </div>
                </div>
                <div className="text-image-container">
                    <img src={hero1} alt="" width={'100%'}/>
                </div>
            </div>  
          </div>

          {/* Container 2 Data */}
          <div className='w-full max-h-max bg-white p-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="text-data-container">
                    <div className="container">
                        <h2 className="h2-text-data ">Transform Your Business Digitally</h2>
                        <p className="para-text">Stay ahead of the competition by leveraging Sceniuz's expertise in digital transformation for accelerated growth and success.</p>

                        <div className="btn-container mt-3">
                            <Link to="/data-advisory" className="btn-link-container"><span className="span-btn-text">Learn More</span></Link>
                        </div>
                    </div>
                </div>
                <div className="text-image-container">
                    <img src={hero2} alt=""  width={'100%'}/>
                </div>
            </div>  
          </div>

        {/* Container 3 Data */}
          <div className='w-full max-h-max bg-white p-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="text-data-container">
                    <div className="container">
                        <h2 className="h2-text-data ">Data Engineering Excellence</h2>
                        <p className="para-text mt-10 mb-10">Build a robust data infrastructure and streamline your data processes with Sceniuz's industry-leading data engineering solutions.</p>

                        <div className="btn-container mt-5">
                            <Link to="/data-engineering" className="btn-link-container"><span className="span-btn-text">Get Started</span></Link>
                        </div>
                    </div>
                </div>
                <div className="text-image-container">
                    <img src={hero3} alt=""  width={'100%'}/>
                </div>
            </div>  
          </div>
        </Slider>
      </div>
    );
  }
}
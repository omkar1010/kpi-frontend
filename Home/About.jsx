import {useEffect,useRef} from "react";
import "../../index.css";
import "../../App.css";
import "./about.css";
import AboutSceniuz from "../AboutSection/AboutSceniuz";
import aboutpage_image from "../../assets/head_frame.svg"

const About = () => {
  const abt = useRef()
  useEffect(()=>{
    if(abt){ abt?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  },[])

  return (
    <>
      <div className="page-container">
      <div className="data-about-footer" ref={abt}></div>
        <div className="container">
          <div className="about-page-wrapper-container">
            {/* Image section of About page */}
            {/* <img src={aboutpage_image} alt="" width={"100%"} /> */}
            <div className="about-us-content mt-10">
              <h1 className="text-center about-text-header p-1 mb-4">
                <span className="span-about">"Seize the</span> Power of Data
                <span className="span-about">
                  {" "}
                  : Revolutionize Your Business with
                </span>{" "}
                Sceniuz"
              </h1>
              <div className="header-para-container container flex flex-col gap-4 items-center">
                <div className="page-wrapper">
                  <p className="container">
                    At <span className="span-para">Sceniuz</span>, we specialize
                    in{" "}
                    <span className="span-para">
                      data analytics, data engineering
                    </span>
                    , and{" "}
                    <span className="span-para">digital transformation</span>,
                    enabling businesses to unlock their full potential. Our team
                    of experts combines deep{" "}
                    <span className="span-para">industry knowledge</span> and
                    cutting-edge technologies to deliver tailored solutions that
                    drive business growth and success. With a focus on
                    data-driven insights, we{" "}
                    <span className="span-para">help businesses</span> make
                    informed decisions, optimize processes, and achieve
                    remarkable results in today's digital landscape. Partner
                    with Sceniuz to leverage our expertise in data analytics,
                    data engineering, and digital transformation and propel your
                    business to <span className="span-para">new heights</span>.
                  </p>
                </div>
              </div>
            </div>
            <AboutSceniuz />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

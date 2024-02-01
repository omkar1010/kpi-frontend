import React from "react";
import "../../index.css";
import "../../App.css";
import "./abouts.css";
import { useNavigate , Link} from "react-router-dom";
import about_image from "../../assets/About_Sceniuz.svg";
import about1 from "../../assets/newimges/business-strategy-success-target-goals.jpg";
import about2 from "../../assets/newimges/alex-shute-eVhVt7YcMfM-unsplash.jpg";
import about3 from "../../assets/newimges/IMG_5969 (1).JPG";
import about4 from "../../assets/newimges/imagenew.jpg";
import FooterWithSocialMediaIcons from "../Home/Footer.jsx";

const AboutSceniuz = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contact-us");
  };
  return (
    <>
      <div className="page-container">
        <div className="container mt-5 flex flex-wrap justify-center mb-5">
          <img src={about_image} alt="" width={"70%"} className="inline" />
        </div>
        <div className="container">
          <div className="about-page-container-section">
            <div className="content-data grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="page-content-wrapper flex justify-center flex-col text-center align-middle gap-10">
                <div className="container">
                  <h2 className="vision-text">
                    Our <span className="span-text">Vision</span>
                  </h2>
                  <div className="rounded-e-xl bg-red-700 w-full flex h-1 mt-1"></div>
                  <p className="para-data-about mt-3">
                    Our vision is to empower businesses with data-driven
                    insights and transformative digital solutions, enabling them
                    to thrive in the digital era. We believe that by unlocking
                    the power of data and embracing digital transformation,
                    businesses can unlock new opportunities, drive innovation,
                    and create a sustainable competitive advantage.
                  </p>
                </div>
              </div>
              <div className="image-div-wrapper md:order-2 mb-10">
                <img src={about1} alt="" srcset="" width={"406px"}  height={"430px"} />
              </div>
            </div>

            {/* about 2 */}
            <div className="content-data grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="image-div-wrapper  order-2 md:order-1">
                <img src={about2} alt="" srcset="" width={"406px"}  height={"430px"}/>
              </div>

              <div className="page-content-wrapper flex justify-center flex-col text-center align-middle gap-10 order-1 md:order-2">
                <div className="container">
                  <h2 className="vision-text">
                    Our <span className="span-text">Mission</span>
                  </h2>
                  <div className="rounded-e-xl bg-amber-700 w-full flex h-1 mt-1"></div>

                  <p className="para-data-about mt-3">
                    Our mission is to be a trusted partner for businesses on
                    their digital journey. We strive to deliver exceptional
                    value through our data analytics, data engineering, and
                    digital transformation services. By leveraging our
                    expertise, industry insights, and cutting-edge technologies,
                    we help businesses transform their operations, enhance
                    customer experiences, and achieve their strategic goals.
                  </p>
                </div>
              </div>
            </div>

            {/* about 3 */}
            <div className="content-data grid grid-cols-1 md:grid-cols-2 gap-10 ">
              <div className="page-content-wrapper flex justify-center flex-col text-center align-middle gap-10 ">
                <div className="container">
                  <h2 className="vision-text">
                    Our <span className="span-text">Team</span>
                  </h2>
                  <div className="rounded-e-xl bg-amber-700 w-full flex h-1 mt-1"></div>
                  <p className="para-data-about mt-3">
                    Our team comprises highly skilled professionals with
                    expertise in data analytics, data engineering, and digital
                    transformation. We have data scientists, data engineers,
                    business analysts, and consultants who bring a wealth of
                    knowledge and a customer-focused mindset to every project.
                    Together, we work collaboratively to understand our clients'
                    needs, solve complex challenges, and deliver impactful
                    solutions.
                  </p>
                </div>
              </div>
              <div className="image-div-wrapper  md:order-1">
                <img src={about3} alt="" srcset="" width={"406px"}  height={"430px"}/>
              </div>
            </div>

            {/* about 4 */}
            <div className="content-data grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="w-full h-full order-2  md:order-1">
                <img src={about4} alt="" srcset=""/>
              </div>

              <div className="page-content-wrapper flex justify-center flex-col text-center align-middle gap-10 order-1 md:order-2">
                <div className="container">
                  <h2 className="vision-text">
                    Our <span className="span-text">Approach</span>
                  </h2>
                  <div className="rounded-e-xl bg-amber-700 w-full flex h-1 mt-1"></div>

                  <p className="para-data-about mt-3">
                    At Sceniuz, we follow a proven approach to deliver
                    successful outcomes for our clients. It involves:
                  </p>
                  <ul className="mt-3">
                    <li className="list-disc text-justify li-text-data">
                      <span className="span-text-dt">
                        Discovery and Assessment:
                      </span>{" "}
                      We start by gaining a deep understanding of our clients'
                      business objectives, challenges, and existing
                      infrastructure.
                    </li>

                    <li className="list-disc text-justify li-text-data mt-2">
                      <span className="span-text-dt">
                        Strategy and Planning:
                      </span>{" "}
                      We develop a tailored strategy and roadmap that aligns
                      with our clients' goals and sets the foundation for
                      successful digital transformation.
                    </li>

                    {/* <li className="list-disc text-justify li-text-data mt-2">
                      <span className="span-text-dt">
                        Implementation and Integration:
                      </span>{" "}
                      We execute the defined strategy, leveraging our technical
                      expertise to implement solutions seamlessly and integrate
                      them with existing systems.
                    </li> */}

                    {/* <li className="list-disc text-justify li-text-data mt-2">
                      <span className="span-text-dt">
                        Data-driven Insights:
                      </span>{" "}
                      We harness the power of data analytics to uncover valuable
                      insights, enabling informed decision-making and continuous
                      improvement.
                    </li> */}

                    {/* <li className="list-disc text-justify li-text-data mt-2">
                      <span className="span-text-dt">
                        Support and Optimization:
                      </span>
                      We provide ongoing support and optimization services to
                      ensure that our clients' digital solutions continue to
                      deliver value and adapt to evolving needs.
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-20 mb-20">
          <h2 className="text-data-contact-us">
            “Unlock Your{" "}
            <span className="span-data-contact">Business Potential</span>.
            Partner with <span className="span-data-contact">Sceniuz</span> and
            Ignite <span className="span-data-contact">Growth</span>."
          </h2>

          <div className="container container-data-para">
            <p className="para-text-contaner-contact">
              Partner with Sceniuz to unleash the potential of your data and
              gain a competitive advantage in your industry. Contact our experts
              today to discuss your data analytics needs and explore how Sceniuz
              can help you drive data-driven decision-making, improve
              operational efficiency, and achieve remarkable business results.
            </p>
          </div>

          <div className="container container-data-para mt-10">
            <Link to="/contact-us">
            <button className="btn-container" >
              <span className="span-btn">Contact Us</span>
            </button>
            </Link>
          </div>

          <FooterWithSocialMediaIcons />
        </div>
      </div>
    </>
  );
};

export default AboutSceniuz;

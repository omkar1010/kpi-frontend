import React from "react";
import "preline";
import Hero from "./Hero";
import "./hero.css";
import service1 from "../../assets/newimges/isaac-smith-6EnTPvPPL6I-unsplash.jpg";
import image3 from "../../assets/newimges/pexels-mikael-blomkvist-6476590.jpg";
import image2 from "../../assets/newimges/pexels-pixabay-265087.jpg";
import whychose1 from "../../assets/newimges/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg";
import whychose2 from "../../assets/newimges/pexels-mart-production-7550298.jpg";
import whychose3 from "../../assets/newimges/pexels-mikhail-nilov-8297478.jpg";
import whychose4 from "../../assets/newimges/claudio-schwarz-fyeOxvYvIyY-unsplash.jpg";
import whtchosesceniuznewimg from "../../assets/WhyChooseSceniuz _.svg";
import { useNavigate } from "react-router-dom";
import FooterWithSocialMediaIcons from "./Footer";
import { Container } from "rsuite";

const Home = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contact-us");
  };
  return (
    <>
    <Container>
      <div className="page-wrapper-container">
        <Hero />

        <div className="about-data-container mt-11">
          <div className="container">
            <h1 className="h1-text-about">
          
              About
              <span className="ml-2" style={{ color: "#D10000" }}>
                Sceniuz 
              </span>
            </h1>
            <div className="data-para-container">
              <div className="container">
                <p className="para-text- p-2">
                  At <span style={{ color: "#D10000" }}>Sceniuz</span>, we are a{" "}
                  <span style={{ color: "#D10000" }}>Microsoft Partner</span> &{" "}
                  <span style={{ color: "#D10000" }}>Qlik Partner </span>
                  specializing in{" "}
                  <span style={{ color: "#D10000" }}>
                    Data Analytics,{" "}
                    <span style={{ color: "#D10000" }}>Data Engineering</span>,
                    and Data Advisory.
                  </span>{" "}
                  With a strong focus on providing professional services, our
                  team of experts is dedicated to helping businesses make the
                  most out of their data assets. We understand that data is the
                  key to unlocking valuable insights and driving better business
                  outcomes. Our data consultancy services offer comprehensive
                  solutions to manage and analyze data effectively. Whether you
                  need assistance with data management strategy, implementation,
                  or optimization, our experienced consultants are here to guide
                  you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-data-container">
          <div className="container">
            <h1 className="h1-text-about">
              <span style={{ color: "#D10000", marginBottom: "60px" }}>
                Services
              </span>
            </h1>

            <div
              style={{ gap: "55px", marginBottom: "80px" }}
              className="flex flex-col md:flex-row"
            >
              <div className="w-full md:w-[276.5px] h-[200px]">
                <img
                  src={service1}
                  alt="Image"
                  class="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-[810px] pl-1">
                <h2 className="ttext-[var(#15234A)] forfont text-2xl font-poppins leading-8 mb-2 container">
                  Data Analytics Solutions
                </h2>
                <p
                  style={{
                    color: "#15234A",
                    fontfamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                  className="paratext text-[var(--blue, #15234A)] forfont text-base forfont leading-[28.8px] "
                >
                  Transform raw data into actionable insights with Sceniuz's
                  advanced data analytics solutions. Our team of data scientists
                  and analysts will work closely with you to uncover patterns,
                  trends, and opportunities within your data. By leveraging
                  cutting-edge technologies and industry best practices, we
                  empower you to make data-driven decisions and drive business
                  growth.
                </p>
              </div>
            </div>

            <div
              style={{ gap: "55px", marginBottom: "80px" }}
              className="flex flex-col md:flex-row "
            >
              <div className="w-full md:w-[310.5px] h-[200px] md:order-2">
                <img
                  src={image2}
                  alt="Image"
                  class="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-[810px] pl-1 md:order-1">
                <h2 className="ttext-[var(#15234A)] text-2xl forfont leading-8 mb-2">
                  Data Engineering Services
                </h2>
                <p
                  style={{
                    color: "#15234A",
                    fontfamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                  className="paratext text-[var(--blue, #15234A)] font-poppins text-base forfont leading-[28.8px] "
                >
                  Build a robust and scalable data infrastructure with Sceniuz's
                  data engineering services. Our experts specialize in designing
                  and implementing data pipelines, data integration, and data
                  warehousing solutions. We ensure that your data is captured,
                  processed, and stored efficiently, enabling you to access and
                  analyze it whenever you need.
                </p>
              </div>
            </div>

            <div
              style={{ gap: "55px", marginTop: "20px" }}
              className="flex flex-col md:flex-row mb-3"
            >
              <div className="w-full md:w-[285.5px] h-[200px]">
                <img
                  src={image3}
                  alt="Image"
                  class="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-[810px] pl-1">
                <h2 className="ttext-[var(#15234A)] text-2xl forfont leading-8 mb-2">
                  Digital Transformation Consulting
                </h2>
                <p
                  style={{
                    color: "#15234A",
                    fontfamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                  className="paratext text-[var(--blue, #15234A)] text-base forfont leading-[28.8px] "
                >
                  Embrace digital transformation to stay competitive in today's
                  rapidly evolving business landscape. Sceniuz provides
                  strategic consulting services to help you navigate the digital
                  realm seamlessly. We assist in identifying transformation
                  opportunities, developing a roadmap, and implementing
                  technology solutions that drive operational efficiency,
                  enhance customer experiences, and unlock new revenue streams.
                  Partner with Sceniuz today and embark on a transformative
                  journey with your data. Our passion for data and analytics
                  drives us to deliver exceptional results for our clients.
                  Contact us to learn more about our data consultancy services
                  and how we can help you achieve your goals. Empower your
                  business with Sceniuz, where innovation meets data-driven
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-data-container ">
          <div className="container ">
            <div className="h1-text-about mb-5">
              <img src={whtchosesceniuznewimg} alt="" />
            </div>

            {/* this service first first container */}
            <div className="flex flex-col md:flex-row mb-3">
              <div
                // style={{
                //   backgroundColor: "#F2F1FB",
                //   flexShrink: "0",
                //   borderRadius: "24px",
                //   // boxShadow: "10px 0px 30px #f2f1fb"
                //   boxShadow: "10px 10px 10px 0px #D0D3DB",
                // }}
                className="w-full md:w-[304.5px] h-[339px] md:order-2 flex items-center justify-center"
              >
                <img src={whychose1} alt="Image" className="self-center" />
              </div>

              <div className="w-full md:w-[810px] pl-1 md:order-1 container pt-5 ">
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    marginBottom: "27px",
                    marginTop: "13px",
                    textDecoration: "underline 5px #D10000",
                
                  }}
                >
                  {" "}
                  <span style={{ color: "#D10000" }}>Expertise in</span> Data
                  Analytics{" "}
                  <span
                    style={{
                      color: "#D10000",
                      marginTop: "15px",
                      display: "inline-block",
                      textDecoration: "underline 5px",
                      // // textUnderlineOffset: "18px",
                    }}
                  >
                    {" "}
                    and Engineering{" "}
                  </span>{" "}
                </h1>
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                >
                  At Sceniuz, we have a team of skilled professionals who
                  specialize in data analytics and engineering. With their deep
                  knowledge and expertise, we can tackle complex data challenges
                  and provide tailored solutions to meet your specific business
                  needs. Our commitment to staying up-to-date with the latest
                  technologies and industry trends ensures that you receive
                  cutting-edge solutions that deliver tangible results
                </h2>
              </div>
            </div>

            {/* this whychose  second container */}
            <div className="flex flex-col mb-3 md:flex-row">
              {/* Left Box (previously Right Box) */}
              <div className="w-full md:w-[304.5px] md:order-2 md:order-1">
                <div
                  // style={{
                  //   backgroundColor: "#f2f1fb",
                  //   flexShrink: "0",
                  //   borderRadius: "24px",
                  //   boxShadow: "10px 10px 10px 0px #D0D3DB",
                  // }}
                  className="h-[339px] flex items-center justify-center "
                >
                  <img src={whychose2} alt="Image" className="self-center" />
                </div>
              </div>

              {/* Right Box (previously Left Box) */}
              <div className="w-full md:w-[810px] pl-1 md:order-1 md:order-2 container pt-5">
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    marginBottom: "27px",
                    marginTop: "13px",
                    textDecoration: "underline 5px #D10000",
                    // textUnderlineOffset: "18px",
                  }}
                >
                  {" "}
                  <span style={{ color: "#D10000" }}></span>Collaborative{" "}
                  <span style={{ color: "#D10000 " }}> Approach </span>{" "}
                </h1>
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                >
                  We believe in fostering strong partnerships with our clients.
                  We work closely with you, taking the time to understand your
                  unique business requirements, goals, and challenges. By
                  collaborating closely, we can develop customized strategies
                  and solutions that align with your vision and drive your
                  business forward. Our team becomes an extension of your own,
                  working hand-in-hand to achieve success.{" "}
                </h2>
              </div>
            </div>

            {/* this is thirrd why choose container  */}
            <div className="flex flex-col md:flex-row mb-3">
              <div
                // style={{
                //   backgroundColor: "#f2f1fb",
                //   flexShrink: "0",
                //   borderRadius: "24px",
                //   // boxShadow: "10px 0px 30px #f2f1fb"
                //   boxShadow: "10px 10px 10px 0px #D0D3DB",
                // }}
                className="w-full md:w-[304.5px] h-[339px] md:order-2 flex items-center justify-center"
              >
                <img src={whychose3} alt="Image" className="self-center" />
              </div>

              <div className="w-full md:w-[810px] pl-1 md:order-1 container pt-5 ">
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    marginBottom: "27px",
                    marginTop: "13px",
                    textDecoration: "underline 5px #D10000",
                    // textUnderlineOffset: "18px",
                  }}
                >
                  {" "}
                  <span style={{ color: "#D10000" }}>Agile and </span> and{" "}
                  <span
                    style={{
                      color: "#D10000",
                      marginTop: "15px",
                      display: "inline-block",
                      textDecoration: "underline 5px",
                      // textUnderlineOffset: "18px",
                    }}
                  >
                    {" "}
                    Scalable Solutions{" "}
                  </span>{" "}
                </h1>
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                    marginTop: "5px",
                  }}
                >
                  In today's fast-paced business environment, agility is
                  crucial. At Sceniuz, we embrace an agile approach to deliver
                  solutions that can adapt and evolve alongside your business.
                  Whether you're a small startup or a large enterprise, our
                  solutions are designed to scale seamlessly, accommodating your
                  growing data needs and future aspirations. We ensure that our
                  solutions can keep pace with your business demands.
                </h2>
              </div>
            </div>

            {/* this is fourth why chose container  */}
            <div className="flex flex-col mb-3 md:flex-row">
              {/* Left Box (previously Right Box) */}
              <div className="w-full md:w-[304.5px] md:order-2 md:order-1">
                <div
                  // style={{
                  //   backgroundColor: "#f2f1fb",
                  //   flexShrink: "0",
                  //   borderRadius: "24px",
                  //   boxShadow: "10px 10px 10px 0px #D0D3DB",
                  // }}
                  className="h-[339px] flex items-center justify-center "
                >
                  <img src={whychose4} alt="Image" className="self-center" />
                </div>
              </div>

              {/* Right Box (previously Left Box) */}
              <div className="w-full md:w-[810px] pl-1 md:order-1 md:order-2 container pt-5">
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "28px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    marginBottom: "27px",
                    marginTop: "13px",
                    textDecoration: "underline 5px #D10000",
                    // textUnderlineOffset: "18px",
                  }}
                >
                  {" "}
                  <span style={{ color: "#D10000" }}> Data-Driven </span>{" "}
                  Decision{" "}
                  <span
                    style={{
                      color: "#D10000",
                      marginTop: "15px",
                      display: "inline-block",
                      textDecoration: "underline 5px",
                      // textUnderlineOffset: "18px",
                    }}
                  >
                    Making{" "}
                  </span>{" "}
                </h1>
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                >
                  Data is a valuable asset that holds the potential to unlock
                  insights and fuel innovation. Sceniuz helps you harness the
                  power of your data, enabling you to make informed decisions
                  that drive measurable business outcomes. Our data analytics
                  expertise allows you to gain a deeper understanding of your
                  customers, identify new market opportunities, optimize
                  operations, and gain a competitive edge{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center w-full md:w-[838px] mt-5">
          <h1
            style={{
              color: "var(--dark-orange, #D10000)",
              fontFamily: "Poppins",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            Take the First Step Towards Transforming Your{" "}
            <span style={{ color: "rgba(21, 35, 74, 0.90)" }}> Business </span>{" "}
          </h1>
          <h1
            style={{
              lineHeight: "28.8px",
              color: " #15234A",
              fontFamily: "Poppins",
              fontSize: "15px",
              fontStyle: "normal",
            }}
            className=""
          >
            Ready to unlock the true potential of your data and embark on a
            transformative journey? Partner with Sceniuz today and discover how
            our data consultancy services can revolutionize your business.
            Contact us to schedule a consultation and learn more about our
            comprehensive range of services. Let's empower your business with
            data and drive growth together.
          </h1>
          <div className="container container-data-para mt-10">
            <button className="btn-container" onClick={navigateToContacts}>
              <span className="span-btn">Contact Us</span>
            </button>
          </div>
        </div>

        <div className="container">
          <FooterWithSocialMediaIcons />
        </div>
      </div>
      </Container>
    </>
  );
};

export default Home;

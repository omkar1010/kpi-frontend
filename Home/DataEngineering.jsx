import { useEffect,useRef } from "react";
import headimg from "../../assets/head_frame.svg";
import service1 from "../../assets/newimges/pexels-christina-morillo-1181263.jpg";
import image3 from "../../assets/newimges/standard-quality-control-collage-concept.jpg";
import image2 from "../../assets/newimges/unnamed (1).jpg";
import analyticsmiddleimg2 from "../../assets/newimges/pexels-startup-stock-photos-7376.jpg";
import whychoceengimg from "../../assets/Our_Data_Engineering_Solutions.svg"
import datadiscovery from "../../assets/newimges/discovery.jpg"
import pipelineimg from "../../assets/newimges/pipeline.jpg";
import intigartion from "../../assets/newimges/saas-concept-collage.jpg";
import { useNavigate } from "react-router-dom";
import head_frame_Engineering from "../../assets/newimges/group 1.png";
import FooterWithSocialMediaIcons from "./Footer";

const DataEngineering = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contact-us");
  };

  const ref = useRef()
useEffect(()=>{
    if(ref){ ref?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  },[])
  return (
    <>
      <div className="wrapper-main-content">
      <div className="bg-red" ref={ref}></div>

        {/* hero section */}
        <div className="container ">
          <img
            className="w-full h-full object-cover "
            src={head_frame_Engineering}
            alt=""
          />
        </div>

        {/* page introduction */}

        <div className="container text-center w-full md:w-[1200px] mt-5">
          <h1
            style={{
              color: "#D10000",
              fontFamily: "Poppins",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            Data{" "}
            <span style={{ color: "rgba(21, 35, 74, 0.90)" }}>
              {" "}
              Engineering{" "}
            </span>{" "}
            Services{" "}
          </h1>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontsStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              color: "rgba(21, 35, 74, 0.87)",
            }}
            className=""
          >
            At <span style={{ color: "#D10000" }}>Sceniuz</span> , we offer
            comprehensive{" "}
            <span style={{ color: "#D10000" }}> data engineering</span> services
            to help businesses build a robust and scalable data infrastructure.
            Our team of skilled data engineers leverages cutting-edge
            technologies and industry best practices to design, develop, and
            implement data pipelines, integration processes, and data storage
            solutions. With our expertise in data engineering, we empower
            businesses to efficiently collect, process, and manage their data,
            enabling them to derive{" "}
            <span style={{ color: "#D10000" }}> valuable insights</span> and
            drive informed decision-making.
          </h1>
        </div>

        <div className="services-data-container ">
          <div className="container">
            <h1 className="h1-text-about">
              <span style={{ color: "#D10000", marginBottom: "60px" }}>
                Services
              </span>
            </h1>

            <div
              style={{ gap: "55px" }}
              className="flex flex-col md:flex-row mb-3   justify-between"
            >
              <div className="w-full md:w-[276.5px] h-[200px]">
                <img
                  src={service1}
                  alt="Image"
                  class="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-[810px] pl-1 mb-5">
                <h2
                  style={{ fontFamily: "Poppins" }}
                  className="ttext-[var(#15234A)] font-semibold text-2xl font-poppins leading-8"
                >
                  Data Integration and ETL
                  <h2
                    style={{
                     color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    marginTop: "10px",
                    fontWeight: "500",
                    }}
                    className="mb-3"
                  >
                    Seamlessly Connect and Transform Your Data
                  </h2>
                </h2>
                <p
                  style={{
                    color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                  className="paratext"
                >
                  Our data integration and Extract, Transform, Load (ETL)
                  services enable businesses to seamlessly connect and transform
                  data from multiple sources. We design and implement robust ETL
                  processes, ensuring that data is cleansed, validated, and
                  transformed into a consistent format. By automating data
                  integration workflows, we help businesses streamline data
                  collection, reduce errors, and improve overall data quality.
                </p>
              </div>
            </div>

            <div
              style={{ marginBottom: "20px", gap: "55px" }}
              className="flex flex-col md:flex-row mb-5  justify-between"
            >
              <div className="w-full md:w-[310.5px] h-[200px] md:order-2">
                <img
                  src={image2}
                  alt="Image"
                  class="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-[810px] pl-1 md:order-1">
                <h2
                  style={{ fontFamily: "Poppins" }}
                  className="ttext-[var(#15234A)] font-semibold text-2xl font-poppins leading-8"
                >
                  Data Warehousing and Data Lakes
                  <h2
                    style={{
                     color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    marginTop: "10px",
                    fontWeight: "500",
                    }}
                    className="mb-3"
                  >
                    Store, Organize, and Access Your Data Efficiently
                  </h2>
                </h2>
                <p
                  style={{
                    color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                  className="paratext text-[var(--blue, #15234A)] font-poppins text-base font-normal leading-[28.8px] "
                >
                  Our data warehousing and data lakes services provide
                  businesses with scalable and efficient storage solutions. We
                  design and implement data warehouse architectures that allow
                  businesses to store, organize, and access their data in a
                  structured and optimized manner. Additionally, we help
                  businesses leverage data lakes to store and process large
                  volumes of unstructured or semi-structured data, enabling
                  advanced analytics and data exploration.
                </p>
              </div>
            </div>

            <div
              style={{ gap: "55px" }}
              className="flex flex-col md:flex-row  justify-between mb-5"
            >
              <div className="w-full md:w-[285.5px] h-[200px]">
                <img
                  src={image3}
                  alt="Image"
                  class="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-[810px] pl-1">
                <h2
                  style={{ fontFamily: "Poppins" }}
                  className="ttext-[var(#15234A)] font-semibold text-2xl font-poppins leading-8"
                >
                  Data Governance and Data Quality
                  <h2
                    style={{
                     color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    marginTop: "10px",
                    fontWeight: "500",
                    }}
                    className="mb-3"
                  >
                    Ensure Data Integrity and Compliance
                  </h2>
                </h2>
                <p
                  style={{
                    color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "28.8px",
                  }}
                  className="paratext text-[var(--blue, #15234A)] font-poppins text-base font-normal leading-[28.8px] "
                >
                  Our data governance and data quality services assist
                  businesses in establishing robust data governance frameworks
                  and ensuring data integrity. We help businesses define data
                  governance policies, implement data quality processes, and
                  establish data lineage and metadata management. By ensuring
                  data accuracy, consistency, and compliance, we enable
                  businesses to have reliable and trustworthy data assets for
                  their analytics and decision-making processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container h1-text-about mb-5">
          <img src={whychoceengimg} alt="" />
        </div>

        <div className="container">
          {/* this service first first container */}
          <div  className="flex flex-col md:flex-row mb-3 items-center justify-center">
            <div className="w-full md:w-[304.5px] h-[339px] md:order-2 flex items-center justify-center">
              <img src={datadiscovery} alt="" />
            </div>

            <div  className="w-full md:w-[810px] pl-1 md:order-1 container flex   h-[250px] items-center justify-center">
              <div>
              <h1
    style={{
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "28px",
      fontStyle: "normal",
      fontWeight: "600",
      marginBottom: "27px",
      textDecoration: "underline 5px #D10000",
      textUnderlineOffset: "18px",
    }}
  >
    {" "}
    <span style={{ fontFamily: "Poppins", color: "#D10000" }}>
      Discovery{" "}
    </span>{" "}
    and {""}
    <span
      style={{
        color: "#D10000",
        marginTop: "15px",
        display: "inline-block",
        textDecoration: "underline 5px",
        textUnderlineOffset: "18px",
      }}
    >
      {" "}
      Assessment{" "}
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
    We begin by understanding your business goals and data requirements. Our
    team collaborates closely with your stakeholders to assess your existing
    data infrastructure and identify areas for improvement.
  </h2>
              </div>
  
</div>

          </div>

          {/* this whychose  second container */}
          <div  className="flex flex-col mb-3 md:flex-row items-center justify-center">
            {/* Left Box (previously Right Box) */}
            <div className="w-full md:w-[304.5px] md:order-2 md:order-1">
              <img src={analyticsmiddleimg2} alt="" />
            </div>

            {/* Right Box (previously Left Box) */}
            <div  className="w-full md:w-[810px] pl-1 md:order-1 md:order-2 container ">
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
                  textUnderlineOffset: "18px",
                }}
              >
                {" "}
                <span style={{ color: "#D10000 " }}> Design</span>{" "}
                <span style={{ color: "#D10000" }}></span> and{" "}
                <span
                  style={{
                    color: "#D10000 ",
                    marginTop: "15px",
                    display: "inline-block",
                    textDecoration: "underline 5px",
                    textUnderlineOffset: "18px",
                  }}
                >
                  {" "}
                  Architecture{" "}
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
                Leveraging our expertise, we design a scalable and efficient
                data architecture tailored to your business needs. We ensure
                seamless integration of disparate data sources, enabling a
                unified view of your data.{" "}
              </h2>
            </div>
          </div>

          {/* this is thirrd why choose container  */}
          <div  className="flex flex-col md:flex-row mb-3 items-center justify-center">
            <div  className="w-full md:w-[304.5px] h-[339px] md:order-2 flex items-center justify-center">
              <img src={pipelineimg} alt="Image" className="self-center" />
            </div>

            <div  className="w-full md:w-[810px] pl-1 md:order-1 container ">
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
                  textUnderlineOffset: "18px",
                }}
              >
                {" "}
                Data Pipeline{" "}
                <span
                  style={{
                    color: "#D10000",
                    marginTop: "15px",
                    display: "inline-block",
                    textDecoration: "underline 5px",
                    textUnderlineOffset: "18px",
                  }}
                >
                  {" "}
                  Implementation{" "}
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
                  marginBottom: "30px",
                }}
              >
                Our skilled data engineers build data pipelines that automate
                data ingestion, transformation, and loading processes. This
                automation reduces manual efforts, increases data accuracy, and
                accelerates data availability.
              </h2>
            </div>
          </div>

          {/* this is fourth why chose container  */}
          <div  className="flex flex-col mb-3 md:flex-row  items-center justify-center">
            {/* Left Box (previously Right Box) */}
            <div  className="w-full md:w-[304.5px] md:order-2 md:order-1">
              <div className="h-[339px] flex items-center justify-center">
                <img src={intigartion} alt="Image" className="self-center" />
              </div>
            </div>

            {/* Right Box (previously Left Box) */}
            <div className="w-full md:w-[810px] pl-1 md:order-1 md:order-2 container mt-8  items-center justify-center h-[355px]">
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
                  textUnderlineOffset: "18px",
                }}
              >
                {" "}
                Data Integration{" "}
                <span
                  style={{
                    color: "#D10000",
                    marginTop: "15px",
                    display: "inline-block",
                    textDecoration: "underline 5px",
                    textUnderlineOffset: "18px",
                  }}
                >
                  and Warehousing
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
                As a Microsoft Partner and Qlik Partner, Sceniuz has deep
                expertise in leveraging the power of these industry-leading
                platforms. Our partnership status ensures that we stay
                up-to-date with the latest technologies, receive advanced
                training, and have access to dedicated support, enabling us to
                deliver exceptional data analytics solutions to our clients.{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="container text-center w-full md:w-[990px] mt-5">
          <h1
            style={{
              color: "#D10000",
              fontFamily: "Poppins",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: "700",
              marginBottom: "30px",
            }}
          >
            Unlock the Full Potential of Your Data with
            <span style={{ color: "rgba(21, 35, 74, 0.90)" }}>
              {" "}
              Sceniuz{" "}
            </span>{" "}
            Data Analytics Solutions{" "}
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
            With Sceniuz as your data engineering partner, you can unlock the
            full potential of your data assets. Our Microsoft and Qlik
            partnerships, combined with our expert data engineering services,
            empower your organization with the tools to drive data insights,
            optimize operations, and stay ahead in today's data-driven world.
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
    </>
  );
};

export default DataEngineering;

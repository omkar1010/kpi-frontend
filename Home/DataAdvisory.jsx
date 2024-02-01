import { useEffect,useRef } from "react"; 
import headimg from "../../assets/head_frame.svg";
import service1 from "../../assets/newimges/pexels-lukas-577210.jpg";
import image3 from "../../assets/newimges/stephen-dawson-qwtCeJ5cLYs-unsplash (1).jpg";
import image2 from "../../assets/newimges/scott-graham-5fNmWej4tAA-unsplash.jpg";
import Advisorytextimg from "../../assets/Our_Data_Advisory_Solutions.svg";
import businessimg from "../../assets/newimges/pexels-fauxels-3184291 (1).jpg";
import datastragety from "../../assets/newimges/data-analysis-marketing-business-report-concept.jpg";
import dataquality from "../../assets/newimges/quality-guarantee-satisfaction-best-excellence-concept.jpg";
import datainsight from "../../assets/newimges/IMG-20230705-WA0002 (1).jpg";
import { useNavigate } from "react-router-dom";
import head_frame_Advisory from '../../assets/newimges/new image.png'
import FooterWithSocialMediaIcons from "./Footer";
import { Link } from "react-router-dom";
const DataAdvisory = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contact-us");
  };

  const dataadi = useRef()
  useEffect(()=>{
      if(dataadi){ dataadi?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    },[])

  return (
    <div className="wrapper-main-content">
      <div className="data-advi-footer" ref={dataadi}></div>




      {/* hero section */}
      <div className="container ">
        <img style={{height:"400px"}} className="w-full object-cover" src={head_frame_Advisory} alt="" />
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
          Data
          <span style={{ color: "rgba(21, 35, 74, 0.90)" }}>
            {" "}
            Advisory{" "}
          </span>{" "}
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
          {" "}
          At <span style={{ color: "#D10000" }}>Sceniuz</span>, we offer
          comprehensive <span style={{ color: "#D10000" }}> Data Advisory</span>{" "}
          services to help businesses harness the power of data and drive
          informed decision-making. Our team of experienced data consultants
          combines domain expertise, advanced analytics, and strategic insights
          to guide organizations on their data-driven journey. With our Data
          Advisory services, we empower businesses to unlock the true potential
          of their data assets and gain a competitive edge in the digital
          landscape.
        </h1>
      </div>

      <div className="services-data-container">
        <div className="container">
          <h1 className="h1-text-about">
            <span style={{ color: "#D10000", marginBottom: "60px" }}>
              Key Offerings and Expertise
            </span>
          </h1>

          <div
            style={{ gap: "55px" }}
            className="flex flex-col md:flex-row mb-3 justify-between "
          >
            <div className="w-full md:w-[276.5px] h-[200px]">
              <img
                src={service1}
                alt="Image"
                class="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[810px] pl-1 mb-5">
              <h2 className="ttext-[var(#15234A)] font-semibold text-2xl font-poppins leading-8">
                Data Analytics and Insights
                <h2
                  style={{
                    color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                  className="mb-3"
                ></h2>
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
                We leverage advanced analytics techniques to derive actionable
                insights from your data. Our data consultants employ data
                mining, predictive modeling, and machine learning algorithms to
                uncover patterns, trends, and opportunities that drive business
                growth and strategic decision-making.
              </p>
            </div>
          </div>

          <div
            style={{ marginBottom: "20px", gap: "55px" }}
            className="flex flex-col md:flex-row mb-5 justify-between"
          >
            <div className="w-full md:w-[310.5px] h-[200px] md:order-2">
              <img
                src={image2}
                alt="Image"
                class="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-[810px] pl-1 md:order-1">
              <h2 className="ttext-[var(#15234A)] font-semibold text-2xl font-poppins leading-8">
                Data Architecture Design
                <h2
                  style={{
                    color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                  className="mb-3"
                ></h2>
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
                Our data consultants design scalable and efficient data
                architectures that enable seamless data integration, storage,
                and retrieval. We analyze your business requirements, recommend
                suitable data platforms, and architect data pipelines to ensure
                the availability and accessibility of data across your
                organization.
              </p>
            </div>
          </div>

          <div
            style={{ gap: "55px" }}
            className="flex flex-col md:flex-row mb-5 justify-between"
          >
            <div className="w-full md:w-[285.5px] h-[200px]">
              <img
                src={image3}
                alt="Image"
                class="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[810px] pl-1">
              <h2 className="ttext-[var(#15234A)] font-semibold text-2xl font-poppins leading-8">
                Data Visualization and Reporting
                <h2
                  style={{
                    color: "#15234A",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                  className="mb-3"
                ></h2>
              </h2>
              <p
                style={{
                  color: "#15234A",
                  fonfamily: "Poppins",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28.8px",
                }}
                className="paratext text-[var(--blue, #15234A)] font-poppins text-base font-normal leading-[28.8px] "
              >
                We transform complex data into meaningful visualizations and
                reports that facilitate data-driven decision-making. Our experts
                use industry-leading tools and technologies to create
                interactive dashboards and intuitive reports that enable
                stakeholders to understand and explore data insights easily.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container h1-text-about mb-5 ">
        <img src={Advisorytextimg} alt="" />
      </div>

      <div  className="container">
        {/* this service first first container */}
        <div className="flex flex-col md:flex-row mb-3 items-center justify-center">
          <div className="w-full md:w-[304.5px] h-[339px] md:order-2 flex items-center justify-center">
            <img src={businessimg} alt="" />
          </div>

          <div className="w-full md:w-[810px] pl-1 md:order-1 container  ">
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
              <span style={{ color: "#D10000" }}> Business </span> Needs {""}
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
                marginBottom: "30px",
              }}
            >
              We start by understanding your business objectives, challenges,
              and data requirements. Our data consultants work closely with your
              team to assess your current data landscape and identify
              opportunities for improvement.
            </h2>
          </div>
        </div>

        {/* this whychose  second container */}
        <div  className="flex flex-col mb-3 md:flex-row items-center justify-center">
          {/* Left Box (previously Right Box) */}
          <div className="w-full md:w-[304.5px] md:order-2 md:order-1">
            <img src={datastragety} alt="" />
          </div>

          {/* Right Box (previously Left Box) */}
          <div className="w-full md:w-[810px] pl-1 md:order-1 md:order-2 container">
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
              <span style={{ color: "#D10000 " }}> Data </span>{" "}
              <span style={{ color: "#D10000" }}></span> Strategy{" "}
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
                Development{" "}
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
                // marginTop: "15px",
                marginBottom: "30px",
              }}
            >
              Leveraging our expertise and insights, we develop a comprehensive
              data strategy that aligns with your business goals. Our data
              strategy outlines the roadmap to harness your data's potential and
              supports your long-term growth.{" "}
            </h2>
          </div>
        </div>

        {/* this is thirrd why choose container  */}
        <div  className="flex flex-col md:flex-row mb-3 items-center justify-center">
          <div className="w-full md:w-[304.5px] h-[339px] md:order-2 flex items-center justify-center">
            <img src={dataquality} alt="Image" className="self-center" />
          </div>

          <div className="w-full md:w-[810px] pl-1 md:order-1 container ">
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "600",
                marginBottom: "27px",
                marginTop: "15px",
                textDecoration: "underline 5px #D10000",
                textUnderlineOffset: "18px",
              }}
            >
              {" "}
              Data Quality{" "}
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
                and Governance{" "}
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
                marginTop: "15px",
                marginBottom: "30px",
              }}
            >
              We prioritize data quality and establish robust data governance
              frameworks to ensure data accuracy, security, and compliance. Our
              focus on data governance ensures that your data assets are
              well-protected and reliable.
            </h2>
          </div>
        </div>

        {/* this is fourth why chose container  */}
        <div className="flex flex-col mb-3 md:flex-row items-center justify-center h-[200]">
          {/* Left Box (previously Right Box) */}
          <div  className="w-full md:w-[304.5px] md:order-2 md:order-1">
            <div className="h-[339px] flex items-center justify-center">
              <img src={datainsight} alt="Image" className="self-center" />
            </div>
          </div>

          {/* Right Box (previously Left Box) */}
          <div   className="w-full md:w-[810px] pl-1 md:order-1 md:order-2 container pt-5">
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
              Insights and{" "}
              <span
                style={{
                  color: "#D10000",
                  marginTop: "15px",
                  display: "inline-block",
                  textDecoration: "underline 5px",
                  textUnderlineOffset: "18px",
                }}
              >
                Analytics
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
              Our data experts employ advanced analytics techniques to uncover
              valuable insights hidden within your data. By transforming raw
              data into actionable intelligence, we empower your team to make
              informed decisions.{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="container text-center w-full md:w-[1120px] mt-5">
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
          Unlock the True Value of Your Data
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
          With Sceniuz as your data advisory partner, you can unlock the true
          value of your data. Our Microsoft and Qlik partnerships, combined with
          our data advisory expertise, equip your business with the tools to
          drive data-driven decisions, optimize processes, and stay ahead in
          today's data-driven landscape.`
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
  );
};

export default DataAdvisory;

import {useEffect,useRef} from "react";
import headimg from "../../assets/newimges/Sceniuz_data.png";
import service1 from "../../assets/newimges/pexels-pixabay-265087.jpg";
import image3 from "../../assets/newimges/annie-spratt-QckxruozjRg-unsplash.jpg";
import image2 from "../../assets/newimges/pexels-lukas-669612.jpg";
import newDataAnalyticsImg from "../../assets/Our_Data_Analytics_Solutions_.svg";
import analyticsmiddleimg1 from "../../assets/newimges/pexels-markus-spiske-360591.jpg";
import analyticsmiddleimg2 from "../../assets/newimges/Screenshot 2023-11-28 163331.png";
import analyticsmiddleimg3 from "../../assets/newimges/campaign-creators-774sCXD0dDU-unsplash.jpg";
import analyticsmiddleimg4 from "../../assets/newimges/unnamed.jpg";

import { useNavigate } from "react-router-dom";
import FooterWithSocialMediaIcons from "./Footer";

const DataAnalytics = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contact-us");
  };

  const dataana = useRef()
  useEffect(()=>{
    if(dataana){ dataana?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  },[])

  return (
    <div className="page-wrapper-div-2">
      <div className="data-anal-footer" ref={dataana}></div>
      <div className="container ">
        <img className="w-full h-full object-cover" src={headimg} alt="" />
      </div>

      <div className="about-data-container mt-11">
        <div className="container">
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: "700",
              marginBottom: "30px",
              textAlign: "center",
            }}
            className=" container "
          >
            <span className="p-0.5"> Data</span>
            <span className="p-0.5" style={{ color: "#D10000" }}>
              Analytics
            </span>
            <span className="p-0.5">Solutions</span>
          </h1>

          <div className="data-para-container">
            <div className="container">
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  color: "rgba(21, 35, 74, 0.87)",
                }}
                className="para-text- p-2"
              >
                At <span style={{ color: "#D10000" }}>Sceniuz</span>, we
                specialize in providing cutting-edge{" "}
                <span style={{ color: "#D10000" }}> data analytics</span>{" "}
                solutions that{" "}
                <span style={{ color: "#D10000" }}>empower businesses</span> to
                unlock the full potential of their data. Our team of experienced
                data analysts and scientists leverages advanced analytics
                techniques and technologies to extract actionable insights and
                drive informed decision-making. With our comprehensive suite of
                data analytics services, we help businesses across industries
                harness the power of their data to gain a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services-data-container">
        <div className="container ">
          <h1 className="h1-text-about">
            <span style={{ color: "#D10000", marginBottom: "60px" }}>
              Services
            </span>
          </h1>

          <div
            style={{ gap: "55px" }}
            className="flex flex-col md:flex-row mb-3  justify-between  "
          >
            <div className="w-full md:w-[276.5px] h-[200px]">
              <img
                src={service1}
                alt="Image"
                class="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[810px] pl-1 mb-5 ">
              <h2
                style={{ fontFamily: "Poppins" }}
                className="ttext-[var(#15234A)] font-semibold text-2xl font-poppins leading-8"
              >
                Data Discovery and Visualization
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
                  Uncover Insights and Tell Powerful Data Stories
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
                Our data discovery and visualization services enable businesses
                to explore their data, identify patterns, and uncover hidden
                insights. We leverage state-of-the-art visualization tools and
                techniques to transform complex data sets into visually
                appealing and interactive dashboards, making it easier for
                stakeholders to understand and derive actionable insights from
                their data.
              </p>
            </div>
          </div>

          <div
            style={{ marginBottom: "20px", gap: "55px" }}
            className="flex flex-col md:flex-row mb-5  justify-between "
          >
            <div className="w-full md:w-[276.5px] h-[200px] md:order-2">
            {/* w-full md:w-[276.5px] h-[200px] */}
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
                Customer Analytics
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
                  Uncover Insights and Tell Powerful Data Stories
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
                Our customer analytics services help businesses gain a deeper
                understanding of their customers' behaviors, preferences, and
                needs. By analyzing customer data from various touchpoints, we
                uncover valuable insights that enable businesses to personalize
                marketing campaigns, optimize customer journeys, and enhance
                overall customer experiences. From segmentation analysis to
                churn prediction, our customer analytics solutions empower
                businesses to drive customer loyalty and satisfaction.
              </p>
            </div>
          </div>

          <div
            style={{ gap: "55px" }}
            className="flex flex-col md:flex-row mb-5  justify-between"
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
                Data Governance and Compliance
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
                  Ensure Data Security, Privacy, and Regulatory Compliance
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
                Our data governance and compliance services assist businesses in
                establishing robust frameworks and processes to ensure data
                security, privacy, and regulatory compliance. We help businesses
                implement data governance policies, conduct data quality
                assessments, and develop strategies to mitigate risks associated
                with data handling. Our expertise ensures that businesses can
                confidently manage their data assets while adhering to
                industry-specific regulations and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container h1-text-about mb-3 ">
        <img src={newDataAnalyticsImg} alt="" />
      </div>

      <div  className="container">
  {/* First service container */}
  <div className="flex flex-col md:flex-row items-center justify-center">
    {/* Left Box */}
    <div className="w-full md:w-[304.5px] h-[339px] md:order-2 flex items-center justify-center">
      <img src={analyticsmiddleimg1} alt="" />
    </div>

    {/* Right Box */}
    <div className="w-full md:w-[810px] pl-1 md:order-1 container pt-5 items-center justify-center">
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
        <span style={{ color: "#D10000" }}>Advanced</span> Data {""}
        <span
          style={{
            color: "#D10000",
            display: "inline-block",
            textDecoration: "underline 5px",
            textUnderlineOffset: "18px",
          }}
        >
          {" "}
          Analytics{" "}
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
        We leverage advanced analytics techniques, including predictive
        modeling, machine learning, and data mining, to extract meaningful
        insights from your data. Our experts use cutting-edge tools and
        algorithms to uncover patterns, trends, and opportunities that enable
        you to make informed business decisions.
      </h2>
    </div>
  </div>

  {/* Second service container */}
  <div className="flex flex-col mb-3 md:flex-row items-center justify-center">
    {/* Left Box */}
    <div className="w-full md:w-[304.5px] md:order-2 md:order-1 mt-14 mb-3">
      <img src={analyticsmiddleimg2} alt="" />
    </div>

    {/* Right Box */}
    <div className="w-full md:w-[810px] pl-1 md:order-1 md:order-2 container pt-5 items-center justify-center">
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
        <span style={{ color: "#D10000 " }}> Interactive </span>{" "}
        <span
          style={{
            color: "#D10000",
            display: "inline-block",
            textDecoration: "underline 5px",
            textUnderlineOffset: "18px",
          }}
        >
          {" "}
          Dashboards{" "}
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
        We design interactive dashboards and visualizations that transform
        complex data into easy-to-understand visual representations. Our
        experts use industry-leading tools, such as Microsoft Power BI and
        Qlik, to create intuitive dashboards and visualizations that enable
        you to explore data, identify trends, and gain actionable insights.{" "}
      </h2>
    </div>
  </div>

  {/* Third service container */}
  <div className="flex flex-col md:flex-row items-center justify-center">
    {/* Left Box */}
    <div className="w-full md:w-[304.5px] h-[339px] md:order-2 flex items-center justify-center">
      <img src={analyticsmiddleimg3} alt="Image" className="self-center" />
    </div>

    {/* Right Box */}
    <div className="w-full md:w-[810px] pl-1 md:order-1 container pt-5 items-center justify-center">
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
        Data Warehousing{" "}
        <span
          style={{
            color: "#D10000",
            marginTop: "12px",
            display: "inline-block",
            textDecoration: "underline 5px",
            textUnderlineOffset: "18px",
          }}
        >
          {" "}
          and Integration{" "}
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
        We design and implement robust data warehousing solutions that enable
        centralized storage and seamless integration of data from multiple
        sources. Our experts leverage Microsoft Azure and other leading
        platforms to build scalable and secure data warehouses, ensuring data
        accessibility and integrity for your analytics needs.
      </h2>
    </div>
  </div>

  {/* Fourth service container */}
  <div className="flex flex-col md:flex-row items-center justify-center">
    {/* Left Box */}
    <div className="w-full md:w-[304.5px] md:order-2 md:order-1">
      <div className="h-[339px] flex items-center justify-center">
        <img src={analyticsmiddleimg4} alt="Image" className="self-center" />
      </div>
    </div>

    {/* Right Box */}
    <div className="w-full md:w-[810px] pl-1 md:order-1 md:order-2 container pt-5 items-center justify-center">
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
        Microsoft{" "}
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
          and Qlik Partners
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
        As a Microsoft Partner and Qlik Partner, Sceniuz has deep expertise in
        leveraging the power of these industry-leading platforms. Our
        partnership status ensures that we stay up-to-date with the latest
        technologies, receive advanced training, and have access to dedicated
        support, enabling us to deliver exceptional data analytics solutions to
        our clients.
      </h2>
    </div>
  </div>
</div>


      <div className="container text-center w-full md:w-[931px] mt-5">
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
          Unlock the Power of Data with
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
          Partner with Sceniuz to unleash the potential of your data and gain a
          competitive advantage in your industry. Contact our experts today to
          discuss your data analytics needs and explore how Sceniuz can help you
          drive data-driven decision-making, improve operational efficiency, and
          achieve remarkable business results.
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

export default DataAnalytics;

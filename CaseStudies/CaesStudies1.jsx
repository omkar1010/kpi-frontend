// import React from "react";
// import Staricon from "../../assets/Star icon.svg";
// import sampleimg from "../../assets/sub-1.JPG"
// import Powerbiimg from "../../assets/sub-1.JPG";
// import mainimg from "../../assets/Newmain.svg"
// import "./Casestudies.css";
// import FooterWithSocialMediaIcons from "../Home/Footer";


// const CaesStudies1 = () => {
//   return (
//     <>
//     <div className="container flex flex-col md:flex-row mb-3 md:mb-0 gap-6">
//     <div className="introduction-container ml-3 ">
//   <div className=" lg:w-[60vw] h-auto md:h-[200px]  md:w-[60vw]  ">
//     <h1 style={{
//   color: '#E09808',
//   fontFamily: 'Poppins',
//   fontSize: '27px',
//   fontStyle: 'normal',
//   fontWeight: 600,
//   lineHeight: '33.6px',
//   marginBottom:'16px' /* 140% */
// }}>Introduction</h1>

// <h3  style={{
//   color: '#5C5C5C',
//   fontFamily: 'Poppins',
//   fontSize: '15px',
//   fontStyle: 'normal',
//   fontWeight: 400,
//   lineHeight: '25.6px' /* 140% */
// }} className="introduction-content">It is a leading consumer wellness industry with an Indian heritage and a global footprint. They believe a healthy lifestyle is not just about being active but also about feeling good from within. So, they approach health and wellness in a holistic manner. They nourish, nurture and energize millions of lives by offering a variety of innovative, industry-leading products. Today, their business spans over 20 countries and 3 continents.</h3>

//   </div>
//   <div className="lg:w-[60vw] h-auto md:w-[60vw] ">
//   <h1 style={{
//   color: '#E09808',
//   fontFamily: 'Poppins',
//   fontSize: '27px',
//   fontStyle: 'normal',
//   fontWeight: 600,
//   lineHeight: '33.6px',
//   marginBottom:'-5px' /* 140% */
// }}>Challenges</h1>

// <ul  style={{
//   color: '#5C5C5C',
//   fontFamily: 'Poppins',
//   fontSize: '15px',
//   fontStyle: 'normal',
//   fontWeight: 400,
//   lineHeight: '19.25.6px' ,/* 140% */

// }} className="introduction-content p-4 custom-list"> <li className="mb-3">Data fragmentation across different platforms, manual reporting processes, and difficulty in tracking KPIs across Channels, Brand, Sub-Brand, Etc.</li>
// <li className="mb-3">These challenges hindered the client’s ability to make informed decisions and effectively manage reports. </li>
// <li className="mb-3">Manual reporting processes consumed valuable time and resources, limiting the client’s agility in responding to market dynamics and optimizing sales strategies.</li>
// <li className="mb-3">Analyze data in real-time to respond quickly to changing consumer preferences and market trends. Delayed analysis can result in missed opportunities or increased inventory costs.</li>
// <li className="mb-3">Keeping up with rapidly changing consumer trends, such as health and wellness preferences or sustainability concerns, and incorporating them into product development and marketing is a constant challenge.</li>
// </ul>
//   </div>


// </div>


//   <div className=" md:w-[35vw] ">
//     {/* <div  >
//  <img src={Powerbiimg} alt="" />
//     </div> */}

//     <h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Industry:</h1>
//     <h1 className="flex items-center justify-center mt-2 " style={{ color: '#FAFAFA', fontFamily: 'Poppins', fontSize: '12px', fontStyle: 'normal', fontWeight: '700', lineHeight: '19.6px', backgroundColor:'#E09808', width:'55px',height:'30px', borderRadius: '2px' }}>FMCG</h1>
//     <div  className="mt-3 md:h-[40vh]">
//       <img style={{borderRadius:'4px'}} className="w-full h-full object-cover" src={sampleimg} alt="" />
//     </div>
//     <h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Tech Stack:</h1>
//     <div className="techstack-content">
//   <h1 className="mt-2 inline-block text-center" style={{ 
//     display: 'inline-block',
//     color: '#FAFAFA',
//     fontFamily: 'Poppins',
//     fontSize: '12px',
//     fontStyle: 'normal',
//     fontWeight: '700',
//     lineHeight: '30px', /* Set line-height equal to height for vertical centering */
//     backgroundColor: '#E09808',
//     width: '70px',
//     height: '30px',
//     borderRadius: '2px',
//     marginRight:'12px',
//     textAlign: 'center' /* Center horizontally */
//   }}>Power BI</h1>



// </div>
// <h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Data Source:</h1>
// <div className="techstack-content">
//   <h1 className="mt-2 inline-block text-center" style={{ 
//     display: 'inline-block',
//     color: '#FAFAFA',
//     fontFamily: 'Poppins',
//     fontSize: '12px',
//     fontStyle: 'normal',
//     fontWeight: '700',
//     lineHeight: '30px', /* Set line-height equal to height for vertical centering */
//     backgroundColor: '#E09808',
//     width: '55px',
//     height: '30px',
//     borderRadius: '2px',
//     marginRight:'12px',
//     textAlign: 'center' /* Center horizontally */
//   }}>SAP</h1>
//   <h1 className="mt-2 inline-block text-center" style={{ 
//     display: 'inline-block',
//     color: '#FAFAFA',
//     fontFamily: 'Poppins',
//     fontSize: '12px',
//     fontStyle: 'normal',
//     fontWeight: '700',
//     lineHeight: '30px', /* Set line-height equal to height for vertical centering */
//     backgroundColor: '#E09808',
//     width: '58px',
//     height: '30px',
//     borderRadius: '2px',
//     textAlign: 'center', /* Center horizontally */
//     marginRight:'12px',
//   }}>Excel</h1>



// </div>



//   </div>

// </div>

// {/* <div className="container ">
//  <img src={mainimg} alt="" />
//       </div> */}
//       <div className="container ">
//           <img
//           style={{borderRadius:'4px'}}
//             className="w-full h-full object-cover"
//             src={mainimg}
//             alt=""
//           />
//         </div>


// <div className="container mt-4">
// <h1 style={{
//   color: '#E09808',
//   fontFamily: 'Poppins',
//   fontSize: '27px',
//   fontStyle: 'normal',
//   fontWeight: 600,
//   lineHeight: '33.6px',
//   marginBottom:'6px' /* 140% */
// }}>Solution</h1>

// <ul  style={{
//   color: '#5C5C5C',
//   fontFamily: 'Poppins',
//   fontSize: '15px',
//   fontStyle: 'normal',
//   fontWeight: 400,
//   lineHeight: '19.6px' ,/* 140% */

// }} className="introduction-content p-4 custom-list"> <li className="mb-4">The Business Intelligence (BI) team presented a proof of concept to the client, initially testing it on three months data. Following successful testing, the solution was deployed for all data. 
// </li>
// <li className="mb-3">These challenges hindered the client’s ability to make informed decisions and effectively manage reports. </li>
// <li className="mb-3">The team provided visualization which helped the client to make better decisions</li>
// <li className="mb-3">The key Business Intelligence objects implemented in building Net Realization Value reports.</li>
// <li className="mb-3">Measure sales performance across various channels. Ensure data integration to provide a holistic view of customer journeys and buying behaviors.
// </li>
// </ul>
// </div>
// <div className="container">
// <h1 style={{
//   color: '#E09808',
//   fontFamily: 'Poppins',
//   fontSize: '27px',
//   fontStyle: 'normal',
//   fontWeight: 600,
//   lineHeight: '33.6px',
//   marginBottom:'6px' /* 140% */
// }}>Result</h1>
// <h3  style={{
//   color: '#5C5C5C',
//   fontFamily: 'Poppins',
//   fontSize: '15px',
//   fontStyle: 'normal',
//   fontWeight: 400,
//   lineHeight: '25.6px' /* 140% */
// }} className="introduction-content">Sceniuz team effectively resolved the client's data fragmentation and manual reporting challenges by implementing a comprehensive solution. By consolidating data from various platforms and offering user-friendly visualizations, the client gained the ability to make informed decisions and respond swiftly to market dynamics, ultimately enhancing their sales strategies and agility. The integration of key Business Intelligence tools allowed for the efficient creation of Net Realization Value reports, significantly optimizing the client's data.</h3>


// <div className="container">
//         <FooterWithSocialMediaIcons />
//       </div>
//   </div>   

//     </>
//   );
// };

// export default CaesStudies1;
// //<img src={Staricon} alt="" />



import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Staricon from "../../assets/Star icon.svg";
import sampleimg from "../../assets/sub-1.JPG";
import Powerbiimg from "../../assets/sub-1.JPG";
import mainimg from "../../assets/Newmain.svg";
import contact from "../../assets/Contact_us.svg";


import "./Casestudies.css";
import FooterWithSocialMediaIcons from "../Home/Footer";

const FORM_SESSION_KEY = "formSubmitted";

const CaesStudies1 = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Define showSuccessAlert state
  const [showForm, setShowForm] = useState(true); // Initially show the form
  const formRef = useRef(null); // Create a useRef for the form


  useEffect(() => {
    // Check session storage to determine if the form has been submitted
    const isFormSubmitted = sessionStorage.getItem(FORM_SESSION_KEY) === "true";

    if (isFormSubmitted) {
      // If the form has been submitted, hide the form
      setFormSubmitted(true);
    }
  }, []);


  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s0o1il2",
        "template_aopwmxg",
        formRef.current,
        "QkWWjdtbxCd_TGadl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessAlert(true);
          sessionStorage.setItem(FORM_SESSION_KEY, "true");
          setTimeout(() => {
            setShowSuccessAlert(false);
            setFormSubmitted(true); // Set formSubmitted to true after submitting
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <>
      <div className="container flex flex-col md:flex-row mb-3 md:mb-0 gap-6">
        {/* ... Existing code for Introduction, Challenges, Industry, Tech Stack, Data Source sections ... */}
        <div className="introduction-container ml-3 ">
          <div className=" lg:w-[60vw] h-auto md:h-[200px]  md:w-[60vw]  ">
            <h1 style={{
              color: '#E09808',
              fontFamily: 'Poppins',
              fontSize: '27px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '33.6px',
              marginBottom: '16px' /* 140% */
            }}>Introduction</h1>

            <h3 style={{
              color: '#5C5C5C',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '25.6px' /* 140% */
            }} className="introduction-content">It is a leading consumer wellness industry with an Indian heritage and a global footprint. They believe a healthy lifestyle is not just about being active but also about feeling good from within. So, they approach health and wellness in a holistic manner. They nourish, nurture and energize millions of lives by offering a variety of innovative, industry-leading products. Today, their business spans over 20 countries and 3 continents.</h3>

          </div>
          <div className="lg:w-[60vw] h-auto md:w-[60vw] ">
            <h1 style={{
              color: '#E09808',
              fontFamily: 'Poppins',
              fontSize: '27px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '33.6px',
              marginBottom: '-5px' /* 140% */
            }}>Challenges</h1>

            <ul style={{
              color: '#5C5C5C',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '19.25.6px',/* 140% */

            }} className="introduction-content p-4 custom-list"> <li className="mb-3">Data fragmentation across different platforms, manual reporting processes, and difficulty in tracking KPIs across Channels, Brand, Sub-Brand, Etc.</li>
              <li className="mb-3">These challenges hindered the client’s ability to make informed decisions and effectively manage reports. </li>
              <li className="mb-3">Manual reporting processes consumed valuable time and resources, limiting the client’s agility in responding to market dynamics and optimizing sales strategies.</li>
              <li className="mb-3">Analyze data in real-time to respond quickly to changing consumer preferences and market trends. Delayed analysis can result in missed opportunities or increased inventory costs.</li>
              <li className="mb-3">Keeping up with rapidly changing consumer trends, such as health and wellness preferences or sustainability concerns, and incorporating them into product development and marketing is a constant challenge.</li>
            </ul>
          </div>


        </div>


        <div className=" md:w-[35vw] ">
          {/* <div  >
 <img src={Powerbiimg} alt="" />
    </div> */}

          <h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Industry:</h1>
          <h1 className="flex items-center justify-center mt-2 " style={{ color: '#FAFAFA', fontFamily: 'Poppins', fontSize: '12px', fontStyle: 'normal', fontWeight: '700', lineHeight: '19.6px', backgroundColor: '#E09808', width: '55px', height: '30px', borderRadius: '2px' }}>FMCG</h1>
          <div className="mt-3 md:h-[40vh]">
            <img style={{ borderRadius: '4px' }} className="w-full h-full object-cover" src={sampleimg} alt="" />
          </div>
          <h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Tech Stack:</h1>
          <div className="techstack-content">
            <h1 className="mt-2 inline-block text-center" style={{
              display: 'inline-block',
              color: '#FAFAFA',
              fontFamily: 'Poppins',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '30px', /* Set line-height equal to height for vertical centering */
              backgroundColor: '#E09808',
              width: '70px',
              height: '30px',
              borderRadius: '2px',
              marginRight: '12px',
              textAlign: 'center' /* Center horizontally */
            }}>Power BI</h1>



          </div>
          <h1 className="mt-4" style={{ color: '#5C5C5C', fontFamily: 'Poppins', fontSize: '17px', fontStyle: 'normal', fontWeight: '500', lineHeight: '19.6px' }}>Data Source:</h1>
          <div className="techstack-content">
            <h1 className="mt-2 inline-block text-center" style={{
              display: 'inline-block',
              color: '#FAFAFA',
              fontFamily: 'Poppins',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '30px', /* Set line-height equal to height for vertical centering */
              backgroundColor: '#E09808',
              width: '55px',
              height: '30px',
              borderRadius: '2px',
              marginRight: '12px',
              textAlign: 'center' /* Center horizontally */
            }}>SAP</h1>
            <h1 className="mt-2 inline-block text-center" style={{
              display: 'inline-block',
              color: '#FAFAFA',
              fontFamily: 'Poppins',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: '30px', /* Set line-height equal to height for vertical centering */
              backgroundColor: '#E09808',
              width: '58px',
              height: '30px',
              borderRadius: '2px',
              textAlign: 'center', /* Center horizontally */
              marginRight: '12px',
            }}>Excel</h1>



          </div>

 

        </div>

      </div>

      <div className="container ">
        <img
          style={{ borderRadius: "4px" }}
          className="w-full h-full object-cover"
          // src={mainimg}
          alt=""
        />
      </div>

      {formSubmitted ? ( // Render "Solution" and "Result" if the form is submitted
        <>
          <div className="container mt-4">
            <h1
              style={{
                color: "#E09808",
                fontFamily: "Poppins",
                fontSize: "27px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "33.6px",
                marginBottom: "6px",
              }}
            >
              Solution
            </h1>
            {/* ... Existing content for the Solution section ... */}
            <ul style={{
              color: '#5C5C5C',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '19.6px',/* 140% */

            }} className="introduction-content p-4 custom-list"> <li className="mb-4">The Business Intelligence (BI) team presented a proof of concept to the client, initially testing it on three months data. Following successful testing, the solution was deployed for all data.
              </li>
              <li className="mb-3">These challenges hindered the client’s ability to make informed decisions and effectively manage reports. </li>
              <li className="mb-3">The team provided visualization which helped the client to make better decisions</li>
              <li className="mb-3">The key Business Intelligence objects implemented in building Net Realization Value reports.</li>
              <li className="mb-3">Measure sales performance across various channels. Ensure data integration to provide a holistic view of customer journeys and buying behaviors.
              </li>
            </ul>
          </div>

          <div className="container">
            <h1
              style={{
                color: "#E09808",
                fontFamily: "Poppins",
                fontSize: "27px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "33.6px",
                marginBottom: "6px",
              }}
            >
              Result
            </h1>

            {/* ... Existing content for the Result section ... */}
            <h3 style={{
              color: '#5C5C5C',
              fontFamily: 'Poppins',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '25.6px' /* 140% */
            }} className="introduction-content">Sceniuz team effectively resolved the client's data fragmentation and manual reporting challenges by implementing a comprehensive solution. By consolidating data from various platforms and offering user-friendly visualizations, the client gained the ability to make informed decisions and respond swiftly to market dynamics, ultimately enhancing their sales strategies and agility. The integration of key Business Intelligence tools allowed for the efficient creation of Net Realization Value reports, significantly optimizing the client's data.</h3>
          </div>

        </>
      ) : (

        // Render the form if it hasn't been submitted

        <div style={{ border: "4px solid #E09808", padding: "30px 30px" }} className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-8 ">

          <div className="form-container order-2 md:order-1">


            {/* Contact form integrated into the UI */}
            <h4 className="contact-h4-header" id="from" style={{ color: '#E09808' }}>
              Contact Information
            </h4>
            <form method="post" className="align-middle" ref={formRef}>
              <input
                type="email"
                className="fields w-full"
                name="user_email"
                id="inputID"
                placeholder="Email"
              />
              <br />

              <input
                type="text"
                className="fields w-full"
                name="user_name"
                id="inputID"
                placeholder="Name"
              />
              <br />

              <input
                type="number"
                className="fields w-full"
                name="user_phone"
                id="inputID"
                placeholder="Phone"
              />
              <br />

              <input
                type="text"
                className="fields w-full"
                name="message"
                id="inputID"
                placeholder="Message"
              />
              {/* ... More form input fields ... */}
              <button
                onClick={handleFormSubmit}
                className="mt-4 field w-full text-center"
              >
                <span className="text-center span-data-btn">Submit</span>
              </button>
            </form>
            {showSuccessAlert && (
              <div
                className="bg-green-500 text-sm text-white rounded-md p-4 mt-4"
                role="alert"
              >
                <span className="font-bold">Success</span> Email sent successfully! We will get back to you soon.
              </div>
            )}
          </div>

          <div className="image-container order-1 md:order-2">
            <div className='image-container order-1 md:order-2'>
              <img src={contact} alt="" srcset="" width={"406px"} height={"500px"} />
            </div>
          </div>


        </div>
      )}

      <div className="container">
        <FooterWithSocialMediaIcons />
      </div>
    </>
  );
};

export default CaesStudies1;

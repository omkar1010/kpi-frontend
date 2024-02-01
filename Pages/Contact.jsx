import React, { useRef,useState,useEffect } from "react";
import "./contact.css";
import "../../index.css";
// import { useNavigate } from "react-router-dom";
// import head_frame from "../../assets/head_frame.svg";
import contact from "../../assets/Contact_us.svg";
import emailjs from "@emailjs/browser";
import FooterWithSocialMediaIcons from "../Home/Footer.jsx"

const Contact = () => {


  const contactfoot = useRef()
  useEffect(()=>{
    if(contactfoot){ contactfoot?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  },[])


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
    const form = useRef();

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const validatePhoneNumber = (phoneNumber) => {
      // Regular expression for a valid phone number (example: +1234567890)
      const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
      return phoneRegex.test(phoneNumber);
    };

    const sendEmail = (e) => {
      e.preventDefault();

      const userPhone = form.current.user_phone.value;

      if (!validatePhoneNumber(userPhone)) {
        alert("Please enter a valid phone number.");
        return;
      } 

      emailjs
      .sendForm(
        "service_s0o1il2",
        "template_e4dubtd",
        form.current,
        "QkWWjdtbxCd_TGadl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
  return (
    <>
      <div className="page-contact-wrapper-container">
      <div className="data-contact-footer" ref={contactfoot}></div>
        <div className="container">
          {/* <div className="image-wrapper-contact-container">
            <img
              src={head_frame}
              alt=""
              srcset=""
              width={"100%"}
              className="mb-3"
            />
          </div> */}
          <div className="get-in-context">
            <h1 className="contact-header">Get in Touch</h1>
            <p className="para mt-3">
              Fill out the form below and let us know how we can assist you. Our
              team will be in touch shortly.
            </p>
          </div>

          {/* Contact Us Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-40 contact-us-container mt-8">
            <div className='form-container order-2 md:order-1'>
            <form
                      ref={form}
                      onSubmit={sendEmail}
                      method="post"
                      className="align-middle"
                    >
                <h4 className="contact-h4-header" id="from">Contact Information</h4>

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
          type="text"
          className="fields w-full"
          name="user_phone"
          id="inputID"
          placeholder="Phone"
          pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
          title="Please enter a valid phone number (e.g., +1234567890)"
          required
        />
                <br />

                <input
                  type="text"
                  className="fields w-full"
                  name="message"
                  id="inputID"
                  placeholder="Message"
                />

                <button className='mt-4 field w-full text-center'>
                  <span className='text-center span-data-btn'>Submit</span>
                </button>
              </form>
              {showSuccessAlert && (
                <div className="bg-green-500 text-sm text-white rounded-md p-4 mt-4" role="alert">
                  <span className="font-bold">Success</span> Email sent successfully! We will get back to you soon.
                </div>
                
              )}
            </div>
            <div className='image-container order-1 md:order-2'>
              <img src={contact} alt="" srcset="" width={"406px"} height={"500px"} />
            </div>
          </div>

          <div className="container">
            <div className="para-data-contaniner mt-10 mb-10">
              <p className="para-data-set-contact">
                Thank you for your interest in{" "}
                <span className="para">Sceniuz</span>. We would love to hear
                from you and discuss how our{" "}
                <span className="para">data analytics, data engineering</span>,
                and{" "}
                <span className="para">digital transformation services</span>{" "}
                can help your business achieve its goals. Please reach out to us
                using the contact information provided below, or fill out the
                contact form, and we will get back to you promptly.
              </p>
            </div>
          </div>

          <div className="container">
            <h2 className="map-sec mb-10">Map Section</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d650.9076854369197!2d72.88021829842049!3d19.11082101260984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99f13304e3b%3A0x5e4cc95214430cd!2sSceniuz%20-%20IT%20Division%20of%20Mahapatra%20Universal%20Limited!5e1!3m2!1sen!2sin!4v1700817308699!5m2!1sen!2sin"
              //   width="600"
              //   height="450"
              //   style="border:0;"
              //   allowfullscreen=""
              //   loading="lazy"
              style={{
                width: "100%",
                height: "450px",
                marginBottom: "40px",
              }}
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="container contact-data-container text-center mt-5">
            <p className="p-data-set mt-5">
              Start Your Transformation Journey Today
            </p>
            <p className="p-para-data">
              Contact us now to discuss your data analytics, data engineering,
              or digital transformation requirements, and let our experts guide
              you towards success.
            </p>

            <div className='container container-data-para mt-10 mb-10'>
              <button className="btn-container"  onClick={() => scrollToTop()}>
                <span className="span-btn">Contact Us</span>
              </button>
            </div>
            
          </div>
        </div>
        <FooterWithSocialMediaIcons/>
      </div>
    </>
  );
};

export default Contact;

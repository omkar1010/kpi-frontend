import { Footer } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import logo from "../../assets/sceniuz.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./about.css";



export default function FooterWithSocialMediaIcons() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/");
  };


  return (
    <div className="page-data-footer-container mt-20">
      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <img alt="Sceniuz" onClick={navigateTo} src={logo} width={"250px"}/>
              <p className="para-contact">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              
              <div>
                <Footer.LinkGroup col>
                <NavLink
                className="font-medium text-black black dark:text-gray-400 nav-text-data"
                to="/about"
              >
                About Us
              </NavLink>

              <NavLink
                className="font-medium text-black black dark:text-gray-400 nav-text-data"
                to="/kpi"
              >
                KPI
              </NavLink>
                </Footer.LinkGroup>
              </div>

              
              <div>
                <Footer.LinkGroup col>
                  <NavLink  className="title-links" to="/data-analytics">
                    Data Analytics
                  </NavLink>
                  <Link href="/data-engineering" className="title-links" to="/data-engineering">
                    Data Engineering
                  </Link>
                  <Link href="/data-advisory" className="title-links" to="/data-advisory">
                    Data Advisory
                  </Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.LinkGroup col>
                  <Link href="/contact-us" className="title-links" to="/contact-us">
                    Contact Us
                  </Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="Sceniuz™ All rights reserved." onClick={navigateTo} year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://www.linkedin.com/company/sceniuz/mycompany/" icon={BsLinkedin} />
              {/* <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsFacebook} /> */}
              
            

            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
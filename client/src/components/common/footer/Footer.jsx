import React from "react";
import { Link } from "react-router-dom";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      
  


      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>
              <span className="initial1">S</span>cholars-
              <span className="initial2">P</span>ro{" "}
              <span className="initial3">C</span>
              onnect <span className="initial4">L</span>LP
            </h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p></p>
            <a href="https://www.linkedin.com/company/scholar-pro-connect-llp/"><i className="fab fa-linkedin icon"></i></a>
            <a href="https://www.instagram.com/scholar_pro_connect/"> <i className="fab fa-instagram icon"></i></a>
            {/* <i className="fab fa-youtube icon"></i> */}
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <Link to={'/about'}> <li>About Us</li></Link>
              {/* <li>Services</li> */}
              <Link to={'/courses'}><li>Courses</li></Link>
              <li>Blog</li>
               <Link to={'/contact'}><li>Contact us</li></Link>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              {/* <li>Contact Us</li> */}
              {/* <li>Pricing</li> */}
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Pune, Maharashtra.
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                Contact No. -  +91 - 90496 58326
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                contact@scholarproconnect.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2024 SPCL ,  All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;

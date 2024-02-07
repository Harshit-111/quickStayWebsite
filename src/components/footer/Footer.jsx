import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top dflex justify-content-between">
          <div className="col mb-3">
            <div className="footer_logo">
              <img src="./images/QS_logo.png" alt="logo" />
            </div>
          </div>

          {/* <div className="col mb-1"></div> */}

          <div className="col mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Blog
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/contact" className="nav-link p-0 text-white">
                  Contact us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Building Rules
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  List your Property
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0  text-white">
                  Partner with us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/contact" className="nav-link p-0 text-white">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-white">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-1">
                <p>Phone: +91-8882798880</p>
              </li>
              <li className="nav-item mb-2">
                <p>Mail: info@quickstayrooms.com</p>
              </li>
              <li className="nav-item mb-2 mt-4">STAY IN TOUCH</li>
              <li className="nav-item mb-2">
                <IconContext.Provider value={{ size: "2em" }}>
                  <div className="footer_icons">
                    <FaWhatsapp />

                    <FaFacebookF />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaYoutube />
                    <FaXTwitter />
                  </div>
                </IconContext.Provider>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

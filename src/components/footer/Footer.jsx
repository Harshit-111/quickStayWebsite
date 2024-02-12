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
    <footer className="myContainerParent">
      <div className="footer myContainer">
        <div className="footer_logo">
          <img src="./images/QS_logo.png" alt="logo" />
        </div>
        <div className="footerLinks fontRegular">
          <ul className="footerLinksList">
            <li className="">
              <Link to="/" className="nav-link p-0 text-white">
                Home
              </Link>
            </li>
            <li className="">
              <Link to="/" className="nav-link p-0 text-white">
                About
              </Link>
            </li>
            <li className="">
              <Link to="/" className="nav-link p-0 text-white">
                Blog
              </Link>
            </li>
            <li className="">
              <Link to="/contact" className="nav-link p-0 text-white">
                Contact us
              </Link>
            </li>
            <li className="">
              <Link to="/" className="nav-link p-0 text-white">
                Building Rules
              </Link>
            </li>
          </ul>
          <ul className="footerLinksList">
            <li className="">
              <Link to="/" className="nav-link p-0 text-white">
                List your Property
              </Link>
            </li>
            <li className="">
              <Link to="/" className="nav-link p-0  text-white">
                Partner with us
              </Link>
            </li>
            <li className="">
              <Link to="/" className="nav-link p-0 text-white">
                Terms & Conditions
              </Link>
            </li>
            <li className="">
              <Link to="/contact" className="nav-link p-0 text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="">
              <Link to="/" className="nav-link p-0 text-white">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerContacts">
          <ul className="footerContactsList">
            <li className="">
              <p>Phone: +91-8882798880</p>
            </li>
            <li className="">
              <p>Mail: info@quickstayrooms.com</p>
            </li>
            <li className="">STAY IN TOUCH</li>
            <li className="">
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
      </div>
    </footer>
  );
};

export default Footer;

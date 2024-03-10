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
          <img src="./images/QS_logo.png" alt="logo" className="logo" />
        </div>
        <div className="footerLinks fontRegular">
          <ul className="footerLinksList">
            <li className="">
              <Link to="/" className="footerLink">
                Home
              </Link>
            </li>
            <li className="">
              <Link to="/" className="footerLink">
                About
              </Link>
            </li>
            <li className="">
              <Link to="/" className="footerLink">
                Blog
              </Link>
            </li>
            <li className="">
              <Link to="/contact" className="footerLink">
                Contact us
              </Link>
            </li>
            <li className="">
              <Link to="/" className="footerLink">
                Building Rules
              </Link>
            </li>
          </ul>
          <ul className="footerLinksList">
            <li className="">
              <Link to="/" className="footerLink">
                List your Property
              </Link>
            </li>
            <li className="">
              <Link to="/" className="footerLink">
                Partner with us
              </Link>
            </li>
            <li className="">
              <Link to="/" className="footerLink">
                Terms & Conditions
              </Link>
            </li>
            <li className="">
              <Link to="/contact" className="footerLink">
                Privacy Policy
              </Link>
            </li>
            <li className="">
              <Link to="/" className="footerLink">
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

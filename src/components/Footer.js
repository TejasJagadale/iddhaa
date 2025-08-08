import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Idhaa HR Solutions</h3>
          <p>
            Strategic human capital partners helping organizations build
            future-ready workforces across the Middle East.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {/* <li>
              <Link to="/services">Services</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
              <Link to="/careers">Careers</Link>
            </li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="/">Recruitment</Link>
            </li>
            <li>
              <Link to="/">HR Consulting</Link>
            </li>
            <li>
              <Link to="/">Training</Link>
            </li>
            <li>
              <Link to="/">Compensation</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Idhaa Technologies.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

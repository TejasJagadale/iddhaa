import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div className="page-container">
      <section className="contact-section">
        <h1>Connect With Idhaa</h1>
        <p className="contact-intro">
          Ready to transform your HR function? Our team is here to help you
          build a stronger, more effective workforce.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            {/* <h2>Our Offices</h2>
            <p>
              <strong>Headquarters:</strong>
              <br />
              Level 12, Business Tower
              <br />
              Downtown District, City
            </p> */}

            <h2>Contact Information</h2>
            <p>
              <strong>Email:</strong> iddhaa2k@gmail.com
            </p>

            <h2>Service Hours</h2>
            <p>Monday - Saturday: 9.30AM to 5.30PM</p>
            <p>Sunday - Closed</p>

            <h2>Follow Our Journey</h2>
            <div className="social-links">
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    fill="currentColor"
                  />
                  <rect x="2" y="9" width="4" height="12" fill="currentColor" />
                  <circle cx="4" cy="4" r="2" fill="currentColor" />
                </svg>
                LinkedIn
              </a>
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    fill="currentColor"
                  />
                </svg>
                Twitter
              </a>
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="18.5" cy="5.5" r="1.5" fill="currentColor" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

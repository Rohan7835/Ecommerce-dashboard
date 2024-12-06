import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa"; // Importing specific icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="contact-info">
          <p>
            <FaEnvelope size={18} />{" "}
            <a href="mailto:contact@mywebsite.com" className="contact-link">
              rohan.s7835@gmail.com
            </a>
          </p>
          <p>
            <FaPhoneAlt size={18} />{" "}
            <a href="tel:+11234567890" className="contact-link">
              7835882372
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

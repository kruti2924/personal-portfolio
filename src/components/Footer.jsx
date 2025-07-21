import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Kruti Dharsandiya. All Rights Reserved</p>
    
      <div className="footer-icons">
        <a
          href="https://github.com/kruti2924"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/krutidharsandiya"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

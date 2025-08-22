import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        <div className="project-box">
          <h3>EduSphere (eLearning Platform)</h3>
          <p>
            MERN-based platform with role-based access, video lectures, admin
            dashboard, and Stripe integration.
          </p>
          <ul>
            <li>Role: Full-stack Developer</li>
            <li>Tech: React, Node.js, MongoDB, Express, Stripe</li>
            <a
              className="project-link"
              href="https://github.com/kruti2924/MERN-eLearning.git"
            >
              GitHub Link
            </a>
          </ul>
        </div>
        <div className="project-box">
          <h3>Flower Shop</h3>
          <p>
            Node.js & MySQL based backend for online flower shop with secure
            authentication and cart features.
          </p>
          <ul>
            <li>Role: Frontend Developer</li>
            <li>Tech: HTML, CSS, JS, MySQL</li>
            <a
              className="project-link"
              href="https://github.com/kruti2924/FlowerShop.git"
            >
              GitHub Link
            </a>
          </ul>
        </div>
        <div className="project-box">
          <h3>Content Management System</h3>
          <p>
            Next.js-based CMS with dynamic content rendering, secure
            authentication, and admin management.
          </p>
          <ul>
            <li>Role: Full-stack Developer</li>
            <li>Tech: Next.js, MongoDB, Tailwind CSS</li>
            <a
              className="project-link"
              href="https://github.com/kruti2924/CMS.git"
            >
              GitHub Link
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;

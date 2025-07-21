import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-summary">
        I’m Kruti Dharsandiya, a Computer Science student passionate about
        building full-stack web applications, solving algorithmic problems, and
        constantly learning new technologies. I aim to use technology to create
        meaningful solutions and bring ideas to life.
      </p>

      <div className="about-details">
        <div className="about-box">
          <h3>Skills</h3>
          <ul>
            <li><strong>Languages</strong> - C, C++, HTML, CSS, JavaScript</li>
            <li><strong>Frameworks/Libraries</strong> - React.js, Node.js, Express.js</li>
            <li><strong>Databases</strong> - MongoDB, MySQL</li>
            <li><strong>Tools</strong> - Git, VSCode</li>
          </ul>
        </div>

        <div className="about-box">
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Arcoiris Logics – Web Developer Intern (Remote)</strong>
              <br />
              Currently working on responsive front-end components for internal
              tools using HTML, CSS, JS, and React.
            </li>
            <li>
              <strong>Matrix ComSec – C++ Intern</strong>
              <br />
              Worked on Inventory Management System using core C++ and file
              handling.
            </li>
          </ul>
        </div>

        <div className="about-box">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>B.Tech in Computer Science - 9.49 CPI</strong>
              <br/> Pandit Deendayal
              Energy University, Gandhinagar
            </li>
            <li>
              <strong>12th – 82.46 %</strong>
              <br />
              Parth Institute, Vadodara
            </li>
            <li>
              <strong>10th – 93.2 %</strong>
              <br />
              Bright Day School, Vadodara
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

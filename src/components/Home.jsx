import React, { useEffect, useState } from "react";
import "./Home.css";
import profileImg from "../assets/profileImg.jpg";

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation once component is mounted
    setVisible(true);
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className={`home-image ${visible ? "fade-in-left" : ""}`}>
          <img src={profileImg} alt="Kruti Dharsandiya" />
        </div>
        <div className={`home-content ${visible ? "fade-in-right" : ""}`}>
          <h1>Hi, I am <span>Kruti Dharsandiya</span></h1>
          <h2>MERN Stack Web Developer</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;

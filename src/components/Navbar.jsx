// // import React from 'react';
// // import './Navbar.css';

// // const Navbar = () => {
// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-logo">Kruti Dharsandiya</div>
// //       <ul className="navbar-links">
// //         <li><a href="#home">Home</a></li>
// //         <li><a href="#about">About</a></li>
// //         <li><a href="#projects">Projects</a></li>
// //         <li><a href="#contact">Contact</a></li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Kruti</div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         <div className={`bar ${isOpen ? "open" : ""}`}></div>
//         <div className={`bar ${isOpen ? "open" : ""}`}></div>
//         <div className={`bar ${isOpen ? "open" : ""}`}></div>
//       </div>
//       <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Kruti Dharsandiya</div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;


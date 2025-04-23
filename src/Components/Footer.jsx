import React from "react";
import '../Styles/Footer.css'
import logo from "../Components/Images/logo.png";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="footer">
        
        <div className="quick-links">
          <h2>QUICK LINK</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
        <img src={logo} alt="Aarohan" />
        <p>© 2024 DGI CODING CLUB. All rights reserved.</p>
        </div>
        <div className="clubname">
          <h2>SOCIAL</h2>
          <div className="icons">
            <a href="https://chat.whatsapp.com/JTx2fuugHurLenaiG5WkW0"><AiOutlineWhatsApp size={35}/></a>
            <a href="https://www.instagram.com/aarohan_dgi/"><AiFillInstagram size={35}/></a>
            <a href="https://www.linkedin.com/company/aarohan-dgi/"><FaLinkedin size={35}/></a>
            <a href="mailto:aarohan.dgi@gmail.com"><FaEnvelope size={35}/></a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

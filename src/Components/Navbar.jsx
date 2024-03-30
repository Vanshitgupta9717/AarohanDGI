import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from "../Components/Images/logo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";



const Navbar = () => {
     
    const[click,setclick] =useState(true);
    const handleClick =()=>setclick(!click);

    const [color,setcolor] = useState(false);
    const changeColor =()=>{
      if(window.scrollY>=100){
        setcolor(true);
      }
      else{
        setcolor(false);
      }
    }

    window.addEventListener("scroll",changeColor);

  return (
    <>
      <div className={color ? "nav nav-bg":"nav"}>
        <div className="header">
        <Link to="/">
          <img src={logo} alt="Aarohan" />
        </Link>
        </div>

       <div className="navmenu">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={handleClick}>Home</Link>
          </li>
          <li>
            <Link to="/team" onClick={handleClick}>Team</Link>
          </li>
          <li>
            <Link to="/events" onClick={handleClick}>Events</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>About Us</Link>
          </li>
        </ul>
        </div>

        <div className="hamburger" onClick={handleClick}>

            {click ? <FaBars size={20} style={{color:"white"}}  />:<FaTimes size={20} style={{color:"white"}}  /> }
            
        </div>
        </div>
    </>

    // <>
    //    <div className="nav_container">
    //    <div class="nav-mobile_bg"></div>
    //    <div className="nav_logo-link-wrapper">
    //    <a className="nav_logo-link w-nav-brand w--current">
    //    <img className="logo" src={logo} loading="lazy" width="152" height="10" alt="" />
    //     </a> 
    //    </div>
    //       <nav role="navigation" className="nav_menu w-nav-menu">
    //         <div className="nav_menu-item-wrap desktop-only-js">
    //           <div className="nav_link-wrapper solutions">
    //               <a href="/" className="nav_link w-inline-block">
    //               <div class="nav_link-text">Home</div>
    //               <div className="nav_link-icon w-embed">
    //               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M4 6L8 10L12 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    //                 </svg>
    //                 </div> 
    //               </a>
                  
    //             </div> 
    //             <div className="nav_link-wrapper solutions">
    //               <a href="/" className="nav_link w-inline-block">
    //               <div class="nav_link-text">Team</div>
    //               <div className="nav_link-icon w-embed">
    //               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M4 6L8 10L12 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    //                 </svg>
    //                 </div> 
    //               </a>
                  
    //             </div> 
    //             <div className="nav_link-wrapper solutions">
    //               <a href="/about" className="nav_link w-inline-block">
    //               <div class="nav_link-text">Events</div>
    //               <div className="nav_link-icon w-embed">
    //               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M4 6L8 10L12 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    //                 </svg>
    //                 </div> 
    //               </a>
                  
    //             </div> 

    //             <div className="nav_link-wrapper solutions">
    //               <a href="/about" className="nav_link w-inline-block">
    //               <div class="nav_link-text">Events</div>
    //               <div className="nav_link-icon w-embed">
    //               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M4 6L8 10L12 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    //                 </svg>
    //                 </div> 
    //               </a>
                  
    //             </div> 
    //           </div> 
    //           <div className="button-group is-navbar">
    //             <div className="button-group">
    //             <a href="https://chat.whatsapp.com/JTx2fuugHurLenaiG5WkW0" target="_blank" class="nav_sm-link w-inline-block">
    //             <div class="icon-1x1-medium embed_cursor-pointer w-embed">
    //             {/* <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
    //             <AiOutlineWhatsApp size={25}  />
    //             <path d="M21.069 6.73077C20.394 7.07692 19.719 7.19231 18.9315 7.30769C19.719 6.84615 20.2815 6.15385 20.5065 5.23077C19.8315 5.69231 19.044 5.92308 18.144 6.15385C17.469 5.46154 16.4565 5 15.444 5C13.0815 5 11.2815 7.30769 11.844 9.61538C8.80647 9.5 6.10647 8 4.19397 5.69231C3.18147 7.42308 3.74397 9.61538 5.31897 10.7692C4.75647 10.7692 4.19397 10.5385 3.63147 10.3077C3.63147 12.0385 4.86897 13.6538 6.55647 14.1154C5.99397 14.2308 5.43147 14.3462 4.86897 14.2308C5.31897 15.7308 6.66897 16.8846 8.35647 16.8846C7.00647 17.9231 4.98147 18.5 3.06897 18.2692C4.75647 19.3077 6.66897 20 8.69397 20C15.5565 20 19.3815 14.1154 19.1565 8.69231C19.944 8.23077 20.619 7.53846 21.069 6.73077Z" fill="currentcolor"></path>
    //             {/* </svg> */}
    //             </div>
    //             </a>
    //             </div>
    //             <div className="button-group">
    //             <a href="https://www.instagram.com/aarohan_dgi/" target="_blank" class="nav_sm-link w-inline-block">
    //             <div class="icon-1x1-medium embed_cursor-pointer w-embed">
    //             {/* <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
    //             <AiFillInstagram size={25}  />
    //             <path d="M21.069 6.73077C20.394 7.07692 19.719 7.19231 18.9315 7.30769C19.719 6.84615 20.2815 6.15385 20.5065 5.23077C19.8315 5.69231 19.044 5.92308 18.144 6.15385C17.469 5.46154 16.4565 5 15.444 5C13.0815 5 11.2815 7.30769 11.844 9.61538C8.80647 9.5 6.10647 8 4.19397 5.69231C3.18147 7.42308 3.74397 9.61538 5.31897 10.7692C4.75647 10.7692 4.19397 10.5385 3.63147 10.3077C3.63147 12.0385 4.86897 13.6538 6.55647 14.1154C5.99397 14.2308 5.43147 14.3462 4.86897 14.2308C5.31897 15.7308 6.66897 16.8846 8.35647 16.8846C7.00647 17.9231 4.98147 18.5 3.06897 18.2692C4.75647 19.3077 6.66897 20 8.69397 20C15.5565 20 19.3815 14.1154 19.1565 8.69231C19.944 8.23077 20.619 7.53846 21.069 6.73077Z" fill="currentcolor"></path>
    //             {/* </svg> */}
    //             </div>
    //             </a>
    //             </div>
    //             <div className="button-group">
    //             <a href="https://www.linkedin.com/company/aarohan-dgi/" target="_blank" class="nav_sm-link w-inline-block">
    //             <div class="icon-1x1-medium embed_cursor-pointer w-embed">
    //             {/* <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
    //             <FaLinkedin size={25}  />
    //             <path d="M21.069 6.73077C20.394 7.07692 19.719 7.19231 18.9315 7.30769C19.719 6.84615 20.2815 6.15385 20.5065 5.23077C19.8315 5.69231 19.044 5.92308 18.144 6.15385C17.469 5.46154 16.4565 5 15.444 5C13.0815 5 11.2815 7.30769 11.844 9.61538C8.80647 9.5 6.10647 8 4.19397 5.69231C3.18147 7.42308 3.74397 9.61538 5.31897 10.7692C4.75647 10.7692 4.19397 10.5385 3.63147 10.3077C3.63147 12.0385 4.86897 13.6538 6.55647 14.1154C5.99397 14.2308 5.43147 14.3462 4.86897 14.2308C5.31897 15.7308 6.66897 16.8846 8.35647 16.8846C7.00647 17.9231 4.98147 18.5 3.06897 18.2692C4.75647 19.3077 6.66897 20 8.69397 20C15.5565 20 19.3815 14.1154 19.1565 8.69231C19.944 8.23077 20.619 7.53846 21.069 6.73077Z" fill="currentcolor"></path>
    //             {/* </svg> */}
    //             </div>
    //             </a>
    //             </div>
    //             <a id="nav-devhub" href="https://chat.whatsapp.com/JTx2fuugHurLenaiG5WkW0" class="button is-small w-button">Join Us Now</a>
    //             </div> 
    //             <div className="nav-mobile_menu-wrapper">
    //               <div data-hover="false" data-delay="0" className="nav-mobile_dropdown w-dropdown">
    //                 <div className="nav-mobile_toggle w-dropdown-toggle"  id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabindex="0">
    //                 <div class="w-icon-dropdown-toggle" aria-hidden="true"></div>
    //                   </div> 
    //                 </div> 
    //             </div>
    //       </nav>
    //       <div id="nav_mobile_open" class="nav_menu-button w-nav-button" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
    //         <div id="nav_mobile_close" role="button" class="nav-mobile_dropdown-close">
    //           <img src="https://assets-global.website-files.com/637359c81e22b715cec245ad/639c9e206daab06c1278bd4d_x.svg" loading="lazy" alt="" class="nav-mobile_dropdown-close-icon" />
    //           </div>
    //           <div class="nav-mobile_menu-open-wrapper">
    //             <img src="https://assets-global.website-files.com/637359c81e22b715cec245ad/63ca7d4644dbbf3ee3f4450b_menu.svg" loading="lazy" alt="" class="nav-mobile_menu-open"/>
    //             </div>
    //             </div>
    //    </div>
    // </>
  );
};

export default Navbar;

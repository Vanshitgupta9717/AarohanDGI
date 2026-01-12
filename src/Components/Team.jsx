import React from "react";
import "../Styles/Team.css";

// Mentors
import BipinPandey from "./Images/Team/bipin ji.png";
import SatyamPandey from "./Images/Team/SATYAM BHAI.png";

// Main Leads
import GarimaSharma from "./Images/Team/GARIMA DIDI.png";
import NishchayChourasia from "./Images/Team/NISCHAYY.png";
import KumarSachin from "./Images/Team/KUMAR SACHIN SINGH.png";

// Technical Team
import SakshiChourasia from "./Images/Team/SAKSHI CHOURASIA.png";
import NehalKhan from "./Images/Team/NEHAL.webp";

// Web Development Team
import VivekRai from "./Images/Team/Vivek Rai.png";
import DeepanshuKumar from "./Images/Team/DEEPANSHU SAP KUMAR.png";

// Event Management Team
import PushkarNagar from "./Images/Team/PUSHKAR.png";

// Marketing & PR Team
import PrabhatJitesh from "./Images/Team/PRANAV JITESHH.png";
import RishabhSingh from "./Images/Team/RISHAB SINGH.png";
import YashMishra from "./Images/Team/YASH VARSHNEY.png";

// Branding & Social Media Team
import RadhaTiwari from "./Images/Team/MANYA ANAND.png";
import AyushSaxena from "./Images/Team/MANYA ANAND.png";
import PrinceYadav from "./Images/Team/PRINCE YADAV.png";
import MilindManiTripathi from "./Images/Team/MILIND MANI TRIPATHI.png";

// Sponsorship Team
import SanskritiKotnala from "./Images/Team/SANSKRITI KOTNALA.png";

const Team = () => {
  return (
    <>
      <div className="Title">
        <h1>Our Team</h1>
        <p>We have a dedicated team to manage everything in the club</p>
      </div>

      <div className="core-team">
        <div className="title">Our Mentor</div>
        <div className="members">
          <div className="boxes">
            <a href="https://www.linkedin.com/in/bipin-pandey" target="_blank" rel="noopener noreferrer">
              <img src={BipinPandey} alt="Bipin Pandey - Faculty Mentor" />
            </a>
            <h3>Bipin Pandey</h3>
            <h4>Faculty Mentor</h4>
          </div>
          <div className="boxes">
            <a href="https://www.linkedin.com/in/satyam-pandey" target="_blank" rel="noopener noreferrer">
              <img src={SatyamPandey} alt="Satyam Pandey - Student Coordinator Mentor" />
            </a>
            <h3>Satyam Pandey</h3>
            <h4>Student Coordinator Mentor</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Main Leads</div>
        <div className="members">
          <div className="boxes">
            <a href="https://www.linkedin.com/in/garima-sharma" target="_blank" rel="noopener noreferrer">
              <img src={GarimaSharma} alt="Garima Sharma - President" />
            </a>
            <h3>Garima Sharma</h3>
            <h4>President</h4>
          </div>
          <div className="boxes">
            <a href="https://www.linkedin.com/in/nishchay-chourasia" target="_blank" rel="noopener noreferrer">
              <img src={NishchayChourasia} alt="Nishchay Chourasia - Vice President" />
            </a>
            <h3>Nishchay Chourasia</h3>
            <h4>Vice President</h4>
          </div>
          <div className="boxes">
            <a href="https://www.linkedin.com/in/kumar-sachin" target="_blank" rel="noopener noreferrer">
              <img src={KumarSachin} alt="Kumar Sachin - Secretary" />
            </a>
            <h3>Kumar Sachin</h3>
            <h4>Secretary</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Technical Team</div>
        <div className="members">
          <div className="boxes">
            <a href="https://www.linkedin.com/in/sakshi-chourasia" target="_blank" rel="noopener noreferrer">
              <img src={SakshiChourasia} alt="Sakshi Chourasia - Technical Head"/>
            </a>
            <h3>Sakshi Chourasia</h3>
            <h4>Technical Head</h4>
          </div>
          <div className="boxes">
            <a href="https://www.linkedin.com/in/nehal-khan" target="_blank" rel="noopener noreferrer">
              <img src={NehalKhan} alt="Nehal Khan - Technical Co-Head" />
            </a>
            <h3>Nehal Khan</h3>
            <h4>Technical Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Web Development Team</div>
        <div className="members">
        <div className="boxes">
            <a href="https://www.linkedin.com/in/vivekrai-dev" target="_blank" rel="noopener noreferrer">
              <img src={VivekRai} alt="Vivek Rai - Web Development Head"/>
            </a>
            <h3>Vivek Rai</h3>
            <h4>Web Development Head</h4>
          </div>
          <div className="boxes">
            <a href="https://www.linkedin.com/in/deepanshu-kumar" target="_blank" rel="noopener noreferrer">
              <img src={DeepanshuKumar} alt="Deepanshu Kumar - Web Development Co-Head" />
            </a>
            <h3>Deepanshu Kumar</h3>
            <h4>Web Development Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Event Management Team</div>
        <div className="members">
          <div className="boxes">
            <a href="https://www.linkedin.com/in/pushkar-nagar" target="_blank" rel="noopener noreferrer">
              <img src={PushkarNagar} alt="Pushkar Nagar - Event Head"/>
            </a>
            <h3>Pushkar Nagar</h3>
            <h4>Event Head</h4>
          </div>
  
        </div>
      </div>

      <div className="core-team">
        <div className="title">Marketing & PR Team</div>
        <div className="members">
          <div className="boxes">
            <a href="https://www.linkedin.com/in/prabhat-jitesh" target="_blank" rel="noopener noreferrer">
              <img src={PrabhatJitesh} alt="Prabhat Jitesh - Marketing & PR"/>
            </a>
            <h3>Prabhat Jitesh</h3>
            <h4>Marketing & PR</h4>
          </div>

          <div className="boxes">
            <a href="https://www.linkedin.com/in/rishabh-singh" target="_blank" rel="noopener noreferrer">
              <img src={RishabhSingh} alt="Rishabh Singh - Marketing & PR" />
            </a>
            <h3>Rishabh Singh</h3>
            <h4>Marketing & PR</h4>
          </div>
          <div className="boxes">
            <a href="https://www.linkedin.com/in/yash-mishra" target="_blank" rel="noopener noreferrer">
              <img src={YashMishra} alt="Yash Mishra - Marketing & PR" />
            </a>
            <h3>Yash Mishra</h3>
            <h4>Marketing & PR</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Branding & Social Media Team</div>
        <div className="members">
          <div className="boxes">
            <a href="https://www.linkedin.com/in/radha-tiwari" target="_blank" rel="noopener noreferrer">
              <img src={RadhaTiwari} alt="Radha Tiwari - Branding & Social Media"/>
            </a>
            <h3>Radha Tiwari</h3>
            <h4>Branding & Social Media</h4>
          </div>
          <div className="boxes">
            <a href="https://www.linkedin.com/in/ayush-saxena" target="_blank" rel="noopener noreferrer">
              <img src={AyushSaxena} alt="Ayush Saxena - Branding & Social Media" />
            </a>
            <h3>Ayush Saxena</h3>
            <h4>Branding & Social Media</h4>
          </div>

          <div className="boxes">
            <a href="https://www.linkedin.com/in/prince-yadav" target="_blank" rel="noopener noreferrer">
              <img src={PrinceYadav} alt="Prince Yadav - Branding & Social Media" />
            </a>
            <h3>Prince Yadav</h3>
            <h4>Branding & Social Media</h4>
          </div>
          <div className="boxes">
            <a href="https://www.linkedin.com/in/milind-mani-tripathi" target="_blank" rel="noopener noreferrer">
              <img src={MilindManiTripathi} alt="Milind Mani Tripathi - Branding & Social Media" />
            </a>
            <h3>Milind Mani Tripathi</h3>
            <h4>Branding & Social Media</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Sponsorship Team</div>
        <div className="members">
          <div className="boxes">
            <a href="https://www.linkedin.com/in/sanskriti-kotnala" target="_blank" rel="noopener noreferrer">
              <img src={SanskritiKotnala} alt="Sanskriti Kotnala - Sponsorship Head" />
            </a>
            <h3>Sanskriti Kotnala</h3>
            <h4>Sponsorship Head</h4>
          </div>
        </div>
      </div>

      <div className="outro">
        {/* Additional content can be added here if needed */}
      </div>
    </>
  );
};

export default Team;

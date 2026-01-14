import React from "react";
import "../Styles/Team.css";

// Mentors
import BipinPandey from "./Images/Team/bipin ji.png";
import SatyamPandey from "./Images/Team/SATYAM BHAI.png";

// Main Leads
import GarimaSharma from "./Images/Team/GARIMA DIDI.png";
import NishchayChourasia from "./Images/Team/NISCHAYY.png";
import KumarSachin from "./Images/Team/KUMAR SACHIN SINGH.png";

// Design and Branding Team
import MilindManiTripathi from "./Images/Team/MILIND MANI TRIPATHI.png";

// Technical Team
import SakshiChourasia from "./Images/Team/SAKSHI CHOURASIA.png";
import NehalKhan from "./Images/Team/NEHAL.webp";

// Event Management Team
import PushkarNagar from "./Images/Team/PUSHKAR.png";
import ManyaAnand from "./Images/Team/MANYA ANAND.png";

// Social Media Team
import RadhaTiwari from "./Images/Team/RadhaTiwari.png";
import AyushSaxena from "./Images/Team/AyushSaxena.jpeg";

// Sponsorship Team
import SanskritiKotnala from "./Images/Team/SANSKRITI KOTNALA.png";

// PR Team
import PrinceYadav from "./Images/Team/PRINCE YADAV.png";
import YashVarshney from "./Images/Team/YASH VARSHNEY.png";

// Branding & Marketing Team
import PranavJitesh from "./Images/Team/PRANAV JITESHH.png";
import RishabhSingh from "./Images/Team/RISHAB SINGH.png";

// Web Development Team
import VivekRai from "./Images/Team/Vivek Rai.png";
import DeepanshuKumar from "./Images/Team/DEEPANSHU SAP KUMAR.png";

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
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={BipinPandey} alt="Bipin Pandey - Faculty Mentor" />
            </a>
            <h3>Bipin Pandey</h3>
            <h4>Faculty Mentor</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
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
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={GarimaSharma} alt="Garima Sharma - President" />
            </a>
            <h3>Garima Sharma</h3>
            <h4>President</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={NishchayChourasia} alt="Nishchay Chourasia - Vice President" />
            </a>
            <h3>Nishchay Chourasia</h3>
            <h4>Vice President</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={KumarSachin} alt="Kumar Sachin - Secretary" />
            </a>
            <h3>Kumar Sachin</h3>
            <h4>Secretary</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Design and Branding Team</div>
        <div className="members">
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={MilindManiTripathi} alt="Milind Mani Tripathi - Design and Branding Head"/>
            </a>
            <h3>Milind Mani Tripathi</h3>
            <h4>Design and Branding Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Technical Team</div>
        <div className="members">
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={SakshiChourasia} alt="Sakshi Chourasia - Technical Team Head"/>
            </a>
            <h3>Sakshi Chourasia</h3>
            <h4>Technical Team Head</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={NehalKhan} alt="Nehal - Technical Team Co-Head" />
            </a>
            <h3>Nehal</h3>
            <h4>Technical Team Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Web Development Team</div>
        <div className="members">
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={VivekRai} alt="Vivek Rai - Web Dev Head"/>
            </a>
            <h3>Vivek Rai</h3>
            <h4>Web Dev Head</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={DeepanshuKumar} alt="Deepanshu Kumar - Web Dev Co-Head" />
            </a>
            <h3>Deepanshu Kumar</h3>
            <h4>Web Dev Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Event Management Team</div>
        <div className="members">
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={PushkarNagar} alt="Pushkar Nagar - Event Management Head"/>
            </a>
            <h3>Pushkar Nagar</h3>
            <h4>Event Management Head</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={ManyaAnand} alt="Manya Anand - Event Management Co-Head" />
            </a>
            <h3>Manya Anand</h3>
            <h4>Event Management Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Social Media Team</div>
        <div className="members">
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={RadhaTiwari} alt="Radha Tiwari - Social Media Head"/>
            </a>
            <h3>Radha Tiwari</h3>
            <h4>Social Media Head</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={AyushSaxena} alt="Ayush Saxena - Social Media Co-Head" />
            </a>
            <h3>Ayush Saxena</h3>
            <h4>Social Media Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Sponsorship Team</div>
        <div className="members">
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={SanskritiKotnala} alt="Sanskriti Kotnala - Sponsorship Team Head" />
            </a>
            <h3>Sanskriti Kotnala</h3>
            <h4>Sponsorship Team Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">PR Team</div>
        <div className="members">
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={PrinceYadav} alt="Prince Yadav - PR Team Head"/>
            </a>
            <h3>Prince Yadav</h3>
            <h4>PR Team Head</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={YashVarshney} alt="Yash Varshney - PR Team Co-Head" />
            </a>
            <h3>Yash Varshney</h3>
            <h4>PR Team Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Branding & Marketing Team</div>
        <div className="members">
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={PranavJitesh} alt="Pranav Jitesh - Branding & Marketing Head"/>
            </a>
            <h3>Pranav Jitesh</h3>
            <h4>Branding & Marketing Head</h4>
          </div>
          <div className="boxes">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={RishabhSingh} alt="Rishabh Singh - Branding & Marketing Co-Head" />
            </a>
            <h3>Rishabh Singh</h3>
            <h4>Branding & Marketing Co-Head</h4>
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

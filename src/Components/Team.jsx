import React from "react";
import "../Styles/Team.css";
import President from "./Images/Team/President.jpeg";
import VPresident from "./Images/Team/VP.png";
import Mentor from "./Images/Team/Mentor.jpeg";
import Mentor2 from "./Images/Team/Mentor2.png";
import Mentor3 from "./Images/Team/Mentor3.png";
import sec1 from "./Images/Team/Secretary.jpeg";
import smHead1 from "./Images/Team/SocialMediaCoHead.jpeg"
import TechHead from "./Images/Team/Tech Head.jpeg";
import TechCoHead from "./Images/Team/Tech Co-Head.jpeg";
import WebDHead from "./Images/Team/WebD Head.jpeg";
import WebDcoHead from "./Images/Team/WebD coHead.jpeg";
import eventHead from "./Images/Team/Event Head.jpeg";
import marketH2 from "./Images/Team/Marketing Head2.jpeg";
import prHead from "./Images/Team/PRO Head.jpeg";
import prHead2 from "./Images/Team/PRO co-head.jpeg";
import designCoHead from "./Images/Team/Design Co-Head.jpeg";
import smHead2 from "./Images/Team/SocialMediaHead.jpeg";
import designHead from "./Images/Team/Design Head.jpeg";
import spHead from "./Images/Team/Sponsor Hea.jpeg";

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
            <img src={Mentor} alt="Mentor" />
            <h3>Omveer Panwar</h3>
            <h4>Mentor</h4>
          </div>
          <div className="boxes">
            <img src={Mentor2} alt="Mentor2" />
            <h3>Vanshit Gupta</h3>
            <h4>Mentor</h4>
          </div>
          <div className="boxes">
            <img src={Mentor3} alt="Mentor3" />
            <h3>Raman Verma</h3>
            <h4>Mentor</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Main Leads</div>
        <div className="members">
          <div className="boxes">
            <img src={President} alt="Our President" />
            <h3>Satyam Pandey</h3>
            <h4>President</h4>
          </div>
          <div className="boxes">
            <img src={VPresident} alt="Our Vice President" />
            <h3>Tayyaba Fatima</h3>
            <h4>Vice President</h4>
          </div>
          <div className="boxes">
            <img src={sec1} alt="Secretary" />
            <h3>Garima Sharma</h3>
            <h4>Secretary</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Technical Team</div>
        <div className="members">
          <div className="boxes">
            <img src={TechHead} alt="Technical Head"/>
            <h3>Sakshi Chourasia</h3>
            <h4>Technical Head</h4>
          </div>
          <div className="boxes">
            <img src={TechCoHead} alt="Technical Co-Head" />
            <h3>Kartikey Purwar</h3>
            <h4>Technical Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Web Development Team</div>
        <div className="members">
        <div className="boxes">
            <img src={WebDHead} alt="Web Development Head"/>
            <h3>Priyam Singh</h3>
            <h4>Web Development Head</h4>
          </div>
          <div className="boxes">
            <img src={WebDcoHead} alt="Web Development Co-Head" />
            <h3>Abhinav Singhal</h3>
            <h4>Web Development Co-Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Event Management Team</div>
        <div className="members">
          <div className="boxes">
            <img src={eventHead} alt="Event Head"/>
            <h3>Ankit Dubey</h3>
            <h4>Event Head</h4>
          </div>
  
        </div>
      </div>

      <div className="core-team">
        <div className="title">Marketing & PR Team</div>
        <div className="members">
          <div className="boxes">
            <img src={marketH2} alt="Marketing Head"/>
            <h3>Kishika Rajpal</h3>
            <h4>Marketing Head</h4>
          </div>

          <div className="boxes">
            <img src={prHead} alt="Public Relation Head" />
            <h3>Satyam Kumar Tiwari</h3>
            <h4>Public Relation Head</h4>
          </div>
          <div className="boxes">
            <img src={prHead2} alt="Public Relation Co-Head" />
            <h3>Siya</h3>
            <h4>Public Relation Head</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Branding & Social Media Team</div>
        <div className="members">
          <div className="boxes">
            <img src={smHead2} alt="Social Media Head"/>
            <h3>Pallavi</h3>
            <h4>Social Media Head</h4>
          </div>
          <div className="boxes">
            <img src={smHead1} alt="Social Media Head" />
            <h3>Riya Jaiswal</h3>
            <h4>Social Media Co-Head</h4>
          </div>

          <div className="boxes">
            <img src={designHead} alt="Design/Branding Head" />
            <h3>Kanika</h3>
            <h4>Design/Branding Head</h4>
          </div>
          <div className="boxes">
            <img src={designCoHead} alt="Design/Branding" />
            <h3>Krishna</h3>
            <h4>Design/Branding</h4>
          </div>
        </div>
      </div>

      <div className="core-team">
        <div className="title">Sponsorship Team</div>
        <div className="members">
          <div className="boxes">
            <img src={spHead} alt="Sponsorship Head" />
            <h3>Shubhika Gautam</h3>
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

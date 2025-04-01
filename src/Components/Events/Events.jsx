import React from "react";
import event1 from "../Images/Events/Codezinth.png";
import event2 from "../Images/Events/CodeNexa.jpg";
import "../../Styles/Events/Events.css";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <>
      <h2 id="header"> OUR EVENTS</h2>
      <div id="Events">
        <div id="Event">
          <div id="head">CodeZenith</div>
          <img id="Event-img" src={event1} alt="CodeZenith" />
          <Link to="/events/CodeZenith">Details</Link>
        </div>
        <div id="Event">
          <div id="head">CodeNexa</div>
          <img id="Event-img" src={event2} alt="CodeZenith" />
          <Link to="/events/CodeNexa">Details</Link>
        </div>
      </div>
        <div id="CodeNexa"></div>
    </>
  );
};

export default Events;

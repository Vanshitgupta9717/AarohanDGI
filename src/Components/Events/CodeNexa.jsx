import React from 'react'
import event2 from "../Images/Events/CodeNexa.jpg";
import speaker1 from "../Images/Events/CN_Speaker1.jpg"
import speaker2 from "../Images/Events/CN_Speaker2.jpg"
import speaker3 from "../Images/Events/CN_Speaker3.jpg"
import speaker4 from "../Images/Events/CN_Speaker4.jpg"
import speaker5 from "../Images/Events/CN_Speaker5.jpg"
import "../../Styles/Events/CodeNexa.css";

const CodeNexa = () => {
  return (
    <>
      
      <h2 id="header">CodeNexa</h2>
        <div id="Content">
          <img id="CN-img" src={event2} alt="CodeNexa" />

          <div id="CNdetails">
          🚀 Embark on a Coding Odyssey at hashtag#CodeNexa! 🌐✨<br /><br />

          Exciting news for tech enthusiasts! Join us virtually from February 22-24 for hashtag#CodeNexa, where the Android Code Realm awaits exploration. 🤖💡<br /><br />

          🌟 Key Highlights:<br />

          🚀 Deep dive into the Android Code Realm.<br />
          🎙️ Insights from Google & Microsoft experts.<br />
          🎁 Exclusive goodies await the participants!<br /><br />

          🔗 Event Link:  <a href="https://lu.ma/aarohan-event">Join Now</a><br /><br />

          📣 Stay Connected:
          Follow us on Instagram for updates and behind-the-scenes content: Follow Aarohan on Instagram - <a href="https://www.instagram.com/aarohan_dgi/">Instagram</a><br /><br />
          </div>
        </div>

        <div id="speakers">
        <div id="CNhead">Speakers</div>
        <div id='Speakers-img'>
            <img src={speaker5} alt="" />
            <img src={speaker2} alt="" />
            <img src={speaker3} alt="" />
            <img src={speaker4} alt="" />
            <img src={speaker1} alt="" />

        </div>
        </div>
      
    </>
  )
}

export default CodeNexa

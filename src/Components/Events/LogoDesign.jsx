import React from 'react'
import event4 from "../Images/Events/Logo_design.jpeg";

import "../../Styles/Events/Logo_design.css";


const LogoDesign = () => {
    return (
        <>

            <h2 id="header">Logo Design Competition</h2>
            <div id="Content">
                <img id="CN-img" src={event4} alt="Logo Design" />

                <div id="CNdetails">
                    🖌️ Aarohan Logo Making Competition
                    🎉 Get ready to unleash your creativity !!<br /><br />
                    📅 Important Dates <br />
                    * Form Opens: 25th May 2025 (Sunday) [ 12:00 PM ]<br />
                    * Last Date to Submit: 27th May 2025 (Tuesday) [ 06:00 PM ]<br />
                    * Result: Announced on 31st May 2025 👇<br /><br />
                    🏆 Rewards <br />
                    The winner's logo will be officially featured across our platforms<br />
                    . Shoutout & certificates!<br />
                    . Winning rewards<br />
                    1st 🥇-  Aarohan t shirt<br />
                    2nd 🥈 - Cup<br />
                    3rd  🥉- Diary<br /><br />


                    ⚠️ EXCLUSIVE ELIGIBILITY CRITERIA ! <br /><br />
                    🔹 You will be able to participate ONLY IF you have followed our social media handles! <br /> <br />
                    📍 Stay connected & never miss upcoming career-changing events & insights! <br />
                    👉 WhatsApp Community: <a href="https://chat.whatsapp.com/JzyQ8HGzejEGiNrlM54d2D" id='event-links'>Join Our WhatsApp Community</a> <br />
                    👉 Instagram: <a href="https://www.instagram.com/aarohan_dgi?igsh=dzAxN3RlOGN1MHJz" id='event-links'>Follow us on Instagram</a> <br />
                    👉 LinkedIn: <a href="https://www.linkedin.com/company/aarohan-dgi/" id='event-links'>Follow us on LinkedIn</a> <br />
                </div>
            </div>
            <div id="winners">
                <div id="CNhead">Winners</div>
                <div id="Winner">
                    <div className="CNwinner">
                        <h2>1st Place</h2>
                        <h1>🥇</h1>
                        <p>Anubhav Agarwal</p>
                        <p>Prize: Aarohan T-shirt</p>
                    </div>
                    <div className="CNwinner">
                        <h2>2nd Place</h2>
                        <h1>🥈</h1>
                        <p>Vedant Singh</p>
                        <p>Prize: Cup</p>
                    </div>
                    <div className="CNwinner">
                        <h2>3rd Place</h2>
                        <h1>🥉</h1>

                        <p>Aditi Baranwal</p>
                        <p>Prize: Diary</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LogoDesign

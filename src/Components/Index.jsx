import React, { useEffect } from "react";
import "../Styles/Index.css";
import "../Styles/Index-Responsive.css";
import { Link } from "react-router-dom";
import event1 from "./Images/Events/Codezinth.png";
import event2 from "./Images/Events/CodeNexa.jpg";
import Front from "./Images/Front.webp";

const Index = () => {
  useEffect(() => {
    const accordion = document.querySelector(".faq-accordion-container");
    const items = accordion.querySelectorAll("li");
    const questions = accordion.querySelectorAll(".faq-question");

    function toggleFaqAccordion() {
      const thisItem = this.parentNode;

      items.forEach((item) => {
        if (thisItem === item) {
          thisItem.classList.toggle("default-faq-open");
          return;
        }

        item.classList.remove("default-faq-open");
      });
    }

    questions.forEach((question) =>
      question.addEventListener("click", toggleFaqAccordion)
    );

    // Clean up the event listeners when the component is unmounted
    return () => {
      questions.forEach((question) =>
        question.removeEventListener("click", toggleFaqAccordion)
      );
    };
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <>
      {/* Front section start */}
      {/* <div className="container">
        
        
        
        <div className= "content">
          <h1>WELCOME TO AAROHAN</h1>
          <p>
            <b>D</b>efining <b>G</b>rowth and <b>I</b>nnovation
          </p>
          <div className="btn">
            <Link to="https://chat.whatsapp.com/JTx2fuugHurLenaiG5WkW0" className="btn1">
              JOIN NOW
            </Link>
            <Link to="/about" className="btn2">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div> */}
      <main className="main-wrapper is-no-top-margin">
        <section id="spotlight-new" className="section is-spotlight-new">
          <div className="padding-section-small">
            <div className="padding-global">
              <div className="container-medium">
                <div className="text-align-center">
                  <a className="home-new_label-component w-inline-block">
                    <div className="label-new_content">
                      <div>Defining Growth & Innovation</div>
                      <div className="home_2-0-arrow-wrapper">
                        <img
                          src="https://assets-global.website-files.com/637359c81e22b715cec245ad/6486fd415a318e62764b3a6c_arrow-right.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                  <div className="padding-bottom padding-small">
                    <h1 class="text-weight-semibold">WELCOME TO AAROHAN DGI</h1>
                    <h1 class="text-weight-semibolds">
                      Dronacharya Groups Of Institutions
                    </h1>
                    <div class="padding-bottom padding-small"></div>
                    <div className="container-xsmall">
                      <div className="text-size-medium text-color-grey8">
                        "Where Passion Fuels Progress, Creativity Sparks
                        Innovation, and Collaboration Drives Growth"
                      </div>
                    </div>
                    <div className="home-new_hero-ftr-wrapper">
                      <a
                        href="https://chat.whatsapp.com/JTx2fuugHurLenaiG5WkW0"
                        className="home-new_hero-ftr-card w-inline-block"
                      >
                        <div className="w-node-_9c44c26b-3476-13c4-36e7-7976923c550a-247aa337">
                          <h3 class="heading-style-h5">Join Us</h3>
                          <div class="padding-bottom padding-custom1"></div>
                          <div class="text-weight-medium text-color-grey8">
                            Code with Us at <br />
                            Aarohan DGI!
                          </div>
                        </div>
                        <div
                          id="w-node-_9c44c26b-3476-13c4-36e7-7976923c5512-247aa337"
                          className="div_relative"
                        >
                          <div className="home-new_hero-ftr-arrow">
                            <div className="icon-1x1-small  w-embed">
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 40 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 12.5H19M19 12.5L12 5.5M19 12.5L12 19.5"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="/about"
                        className="home-new_hero-ftr-card w-inline-block"
                      >
                        <div className="w-node-_9c44c26b-3476-13c4-36e7-7976923c550a-247aa337">
                          <h3 class="heading-style-h5">Learn More</h3>
                          <div class="padding-bottom padding-custom1"></div>
                          <div class="text-weight-medium text-color-grey8">
                            Discover Endless Possibilities
                            <br />
                          </div>
                        </div>
                        <div
                          id="w-node-_9c44c26b-3476-13c4-36e7-7976923c5512-247aa337"
                          className="div_relative"
                        >
                          <div className="home-new_hero-ftr-arrow">
                            <div className="icon-1x1-small  w-embed">
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 40 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 12.5H19M19 12.5L12 5.5M19 12.5L12 19.5"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://www.instagram.com/aarohan_dgi/"
                        className="home-new_hero-ftr-card w-inline-block"
                      >
                        <div className="w-node-_9c44c26b-3476-13c4-36e7-7976923c550a-247aa337">
                          <h3 class="heading-style-h5">Connect</h3>
                          <div class="padding-bottom padding-custom1"></div>
                          <div class="text-weight-medium text-color-grey8">
                            Stay Linked, Stay Informed
                            <br />
                          </div>
                        </div>
                        <div
                          id="w-node-_9c44c26b-3476-13c4-36e7-7976923c5512-247aa337"
                          className="div_relative"
                        >
                          <div className="home-new_hero-ftr-arrow">
                            <div className="icon-1x1-small  w-embed">
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 40 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 12.5H19M19 12.5L12 5.5M19 12.5L12 19.5"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://assets-global.website-files.com/637359c81e22b715cec245ad/6464a7ec8c8fd22869e80364_home-hero-new-bg1.svg"
            loading="eager"
            alt=""
            class="home-new_bg1"
          ></img>
        </section>
      </main>

      {/* Front section end */}

      {/* About section start */}

      <section id="green" class="section is-gradient-bg overflow-hidden">
        <div class="padding-global">
          <div class="container-medium">
            <div class="padding-section-medium">
              <div class="text-align-center">
                <div class="align-center max-width-large is-mobile-text-align-left">
                  <div class="heading_wrapper">
                    <h1 class="heading-style-h1">ABOUT US</h1>
                    <div
                      data-w-id="9c44c26b-3476-13c4-36e7-7976923c5629"
                      class="heading-fader_trigger"
                    >
                      <div class="heading-fader_mask">
                        <div class="heading-fader_component"></div>
                      </div>
                    </div>
                  </div>
                  <div class="padding-bottom padding-custom4"></div>
                  <p class="home-sustainability_text">
                    <p className="about-para">Step into the dynamic realm of Aarohan, the beating heart of
                    innovation at <strong>Dronacharya Group of Institution</strong></p>

                    <br/>

                    <p className="about-para">Aarohan isn't just a coding club; it's a thriving
                    community where passionate minds converge to explore the
                    vast landscapes of programming excellence. Within these
                    walls, technology and creativity intertwine, creating an
                    atmosphere that resonates with the fervor of innovation.
                    Committed to fostering a culture of creativity and
                    problem-solving, Aarohan stands as a guiding light for
                    aspiring coders and tech enthusiasts. It's more than a club;
                    it's an intellectual haven where the shared commitment to
                    innovation transforms ideas into reality. Aarohan's
                    significance lies in its ability to serve as a nexus for
                    diverse talents, offering a platform for collaboration and
                    learning.
</p>

                    <br/>


                    <p className="about-para">At the crossroads of intellect and ingenuity, Aarohan
                    propels its members into the ever-evolving world of coding.
                    It goes beyond the conventional coding club experience,
                    providing a holistic journey of growth and exploration.
                    Through hackathons and workshops, Aarohan becomes a
                    playground for continuous improvement, a space where
                    boundaries are pushed, and new horizons are discovered.
                    Guided by a collective enthusiasm for pushing boundaries,
                    Aarohan is not just a forum; it's a launchpad for
                    innovation. Here, coding is not a mere skill; it's a
                    transformative journey that empowers individuals with the
                    practical skills needed to thrive in the fast-paced tech
                    landscape.</p>
                  </p>
                  <div class="padding-bottom padding-custom4"></div>
                </div>
                <div class="home_globe-wrapper">
                  <div class="home_globe-animation-embed desktop-only-js w-embed w-iframe">
                    {/* <iframe class="element-style" src="https://player.vimeo.com/video/791149033?h=a0b62c3daa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&amp;autoplay=1&amp;background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Hero" data-ready="true"></iframe> */}
                  </div>
                  {/* <img src="https://assets-global.website-files.com/637359c81e22b715cec245ad/63df6463dd106611b02ab325_Sustainablity.webp" loading="lazy" width="540" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 100vw" alt="" srcset="https://assets-global.website-files.com/637359c81e22b715cec245ad/63df6463dd106611b02ab325_Sustainablity-p-500.webp 500w, https://assets-global.website-files.com/637359c81e22b715cec245ad/63df6463dd106611b02ab325_Sustainablity-p-800.webp 800w, https://assets-global.website-files.com/637359c81e22b715cec245ad/63df6463dd106611b02ab325_Sustainablity.webp 1080w" class="home_globe-mobile-img" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="about-container">
        <div className="about-content">
          <h1>ABOUT US</h1>
          <p className="about-para">
            Step into the dynamic realm of Aarohan, the beating heart of
            innovation at Dronacharya Group of Institutions. Aarohan isn't just a
            coding club; it's a thriving community where passionate minds
            converge to explore the vast landscapes of programming excellence.
            Within these walls, technology and creativity intertwine, creating
            an atmosphere that resonates with the fervor of innovation.
            Committed to fostering a culture of creativity and problem-solving,
            Aarohan stands as a guiding light for aspiring coders and tech
            enthusiasts. It's more than a club; it's an intellectual haven where
            the shared commitment to innovation transforms ideas into reality.
            Aarohan's significance lies in its ability to serve as a nexus for
            diverse talents, offering a platform for collaboration and learning.
          </p>

          <p className="about-para">
            At the crossroads of intellect and ingenuity, Aarohan propels its
            members into the ever-evolving world of coding. It goes beyond the
            conventional coding club experience, providing a holistic journey of
            growth and exploration. Through hackathons and workshops, Aarohan
            becomes a playground for continuous improvement, a space where
            boundaries are pushed, and new horizons are discovered. Guided by a
            collective enthusiasm for pushing boundaries, Aarohan is not just a
            forum; it's a launchpad for innovation. Here, coding is not a mere
            skill; it's a transformative journey that empowers individuals with
            the practical skills needed to thrive in the fast-paced tech
            landscape.
          </p>

          <p className="about-para">
            In this vibrant ecosystem, every line of code represents a step
            towards unraveling the infinite possibilities within the digital
            realm. Aarohan is more than an organization; it's a thriving
            community where inspiration fuels collaboration and growth. It's an
            invitation to join a movement where the language of code transcends
            into the language of possibilities. As we code the future together,
            Aarohan invites you to be part of a collective commitment to shaping
            a future where technology becomes a powerful force for positive
            change.
          </p>
        </div>
      </div> */}

      {/* About section end */}

      {/* Event section start */}
      <div className="eventhead">
        <h1> OUR EVENTS</h1>
      </div>

      <div className="event-container">
        <div className="events">
          <div className="Events">
            <div>
              <img src={event1} alt="Codezenith" />
            </div>
          </div>
          <div className="Events">
            <div>
              <img src={event2} alt="CodeNexa" />
            </div>
          </div>
        </div>
      </div>

      {/*Events section end*/}

      {/*Faqs section start*/}

      <div class="faq-accordion-container">
        <ul>
          <h3>Frequently Asked Questions</h3>
          <li class="default-faq-open">
            <div class="faq-question">
              <h4>What is Aarohan and what does it offer to its members?</h4>
            </div>
            <div class="faq-answer">
              <p>
                Aarohan is a dynamic coding club at Dronacharya Group of
                Institutes, providing a vibrant space for passionate individuals
                to explore the realms of programming excellence. Members can
                expect an environment that fosters creativity, collaboration,
                and hands-on learning, transcending traditional coding
                experiences.
              </p>
            </div>
          </li>
          <li>
            <div class="faq-question">
              <h4>
                How can I join Aarohan, and is there any specific skill level
                required?
              </h4>
              <span class="fa fa-caret-down"></span>
            </div>
            <div class="faq-answer">
              <p>
                Joining Aarohan is open to all enthusiasts! Whether you're a
                beginner or an experienced coder, our club welcomes individuals
                at all skill levels. The emphasis is on collaboration and
                continuous improvement, ensuring everyone finds value and
                support in their coding journey.
              </p>
            </div>
          </li>
          <li>
            <div class="faq-question">
              <h4>
                What activities and events does Aarohan organize throughout the
                year?
              </h4>
              <span class="fa fa-caret-down"></span>
            </div>
            <div class="faq-answer">
              <p>
                Aarohan hosts a variety of engaging activities and events,
                ranging from exhilarating hackathons to insightful workshops.
                These events provide members with opportunities to challenge
                themselves, collaborate with peers, and stay at the forefront of
                the ever-evolving world of coding.
              </p>
            </div>
          </li>
          <li>
            <div class="faq-question">
              <h4>
                How does Aarohan support members' professional growth in the
                tech industry?
              </h4>
              <span class="fa fa-caret-down"></span>
            </div>
            <div class="faq-answer">
              <p>
                Aarohan serves as a launchpad for innovation, offering a
                platform where members not only learn to code but also develop
                practical skills essential for the tech industry. The club
                provides insights, mentorship, and networking opportunities to
                support members in their professional growth and development.
              </p>
            </div>
          </li>
          <li>
            <div class="faq-question">
              <h4>
                What makes Aarohan different from other coding clubs or forums?
              </h4>
              <span class="fa fa-caret-down"></span>
            </div>
            <div class="faq-answer">
              <p>
                Aarohan stands out as a vibrant ecosystem driven by a collective
                enthusiasm for pushing boundaries. It goes beyond being a
                traditional coding club; it's a community where the language of
                code transcends into the language of possibilities. Members
                experience a transformative journey, finding inspiration,
                collaboration, and a shared commitment to shaping the future
                through technology.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/*Faqs section end*/}
    </>
  );
};

export default Index;

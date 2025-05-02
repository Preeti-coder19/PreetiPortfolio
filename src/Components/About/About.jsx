import React from "react";
import "./About.css";

import profile from "../../assets/profile.jpg";

import theme_pattern from "../../assets/theme_pattern.svg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate and detail-oriented Front-End Developer with 2 years of
              hands-on experience in designing and developing responsive,
              user-centric web applications. Proficient in HTML, CSS,
              JavaScript, and modern frameworks like React.js, Node js and
              Express Js Skilled in translating UI/UX designs into functional
              code, optimizing performance, and ensuring cross-browser
              compatibility.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>

              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>

              <hr style={{ width: "100%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>

              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>MySQL</p>

              <hr style={{ width: "80%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>

              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Node JS</p>

              <hr style={{ width: "90%" }} />
            </div>

            <div className="about-skill">
              <p>Express JS</p>

              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>MongoDB</p>

              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>JAVA</p>

              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Spring</p>

              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>Hibernate</p>

              <hr style={{ width: "60%" }} />
            </div>
          </div>

          <div className="about-achievements">
            <div className="about-achievement">
              <h1>2+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>10+</h1>
              <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>15+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
// import myresume from "../../public/Preeti_Poojari_Resume.pdf";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile} alt="" className="profile" />
      <h1>
        <span>I'm Preeti Poojari, </span>Java and Mern Stack Developer{" "}
      </h1>
      <p>
        I'm Frontend and Backend developer from Bangalore, India with 2 years of
        experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            className="anchor-link"
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect With Me
          </a>
        </div>

        <div className="hero-resume">
          <a
            href="/Preeti_Poojari_Resume.pdf"
            download="Preeti_Poojari_Resume.pdf"
            className="anchor-link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

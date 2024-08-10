import React from "react";
import "./Hero.css";
import darkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <>
      <div className="hero container-box">
        <div className="hero-info">
          <h3>We Ensure better education for a better world</h3>
          <p>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skill, and experiences needed to excel in the dynamic
            field of education.
          </p>
          <button className="btn-common">Explore more <img src={darkArrow} alt="" /> </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

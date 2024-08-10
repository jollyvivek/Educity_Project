import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="img" />
        <img className="play-icon" src={play_icon} alt="play-icon"
        onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomarrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          adipisci, reprehenderit repudiandae alias ea nesciunt soluta? Laborum
          dolor temporibus quis illum exercitationem
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
          perspiciatis quisquam accusantium sunt sequi quos eligendi assumenda
          deleniti.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla labore
          nisi nihil corrupti sit aliquam vitae doloribus maiores ullam eaque?
          Esse perferendis eos deleniti 
        </p>
      </div>
    </div>
  );
};

export default About;

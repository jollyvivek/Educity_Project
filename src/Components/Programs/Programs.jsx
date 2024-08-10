import React from "react";
import "./Programs.css";
import prog_img1 from "../../assets/program-1.png";
import prog_img2 from "../../assets/program-2.png";
import prog_img3 from "../../assets/program-3.png";
import prog_icon1 from "../../assets/program-icon-1.png";
import prog_icon2 from "../../assets/program-icon-2.png";
import prog_icon3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs" >
        <div className=" program ">
          <img className="" src={prog_img1} alt="img" />
          <div className="caption ">
            <img className="" src={prog_icon1} alt="icon" />
            <p>Graduation Degree </p>
          </div>
        </div>
        <div className=" program ">
          <img className="" src={prog_img2} alt="img" />
          <div className="caption">
            <img className="" src={prog_icon2} alt="icon" />
            <p>Masters Degree </p>
          </div>
        </div>
        <div className=" program ">
          <img className="" src={prog_img3} alt="" />
          <div className="caption ">
            <img className="" src={prog_icon3} alt="icon" />
            <p> Post Graduation </p>
          </div>
        </div>
      
    </div>
  );
};

export default Programs;

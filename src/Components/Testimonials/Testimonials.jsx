import React, { useRef } from "react";
import "./Testimonials.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {

  const slider=useRef();
  let tx=0;

  const slideForward = () =>{
    if (tx > -50){
        tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }

  const slideBackward = () =>{
    if (tx < 0){
      tx +=25;
  }
  slider.current.style.transform=`translateX(${tx}%)`;
    // alert();
  }

  return (
    <div className="testimonial">
      <img className="next-btn" src={next_btn} alt="next-btn" onClick={slideForward} />
      <img className="back-btn" src={back_btn} alt="btn-back" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user-img" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                minima aspernatur error quos suscipit! Amet aliquam cum
                voluptates corporis maiores.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user-img" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                minima aspernatur error quos suscipit! Amet aliquam cum
                voluptates corporis maiores.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user-img" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                minima aspernatur error quos suscipit! Amet aliquam cum
                voluptates corporis maiores.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user-img" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                minima aspernatur error quos suscipit! Amet aliquam cum
                voluptates corporis maiores.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

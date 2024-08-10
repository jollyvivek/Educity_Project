import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b41818b4-ce4d-4755-ac6b-4e4fe66e1c33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-left">
        <h3>
          Send us a message{" "}
          <img className="msg-icon" src={msg_icon} alt="msg-icon" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          iure natus vel nemo blanditiis animi pariatur ut atque ad aut. Ut fuga
          consectetur alias corporis.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail-icon" /> Contact@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="phone-icon" /> +91-9876543210
          </li>
          <li>
            <img src={location_icon} alt="location-icon" /> 77 jolly Caslte,
            Ambala <br /> Ambala City ,Haryana
          </li>
        </ul>
      </div>
      <div className="contact-right">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="username">Your Name</label>
          <input
            type="text"
            name="name"
            id="username"
            placeholder="Enter your name"
            autoComplete="off"
            required
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your mobile number"
            autoComplete="off"
            required
          />
          <label htmlFor="message">Write your message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn-common dark-btn my-1">
            {" "}
            Submit now
            <img src={white_arrow} alt="arrow-icon" />
          </button>
        </form>
        <span className="send-msg ">{result}</span>
      </div>
    </div>
  );
};

export default Contact;

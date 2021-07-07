import "./styles.css";
import React, { useState } from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { ImLocation2, ImCircleUp, ImCircleDown } from "react-icons/im";

export default function Contact() {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const toggleInfo1 = () => {
    setShowInfo1(!showInfo1);
  };
  const toggleInfo2 = () => {
    setShowInfo2(!showInfo2);
  };
  return (
    <div className="projects-page">
      <h2>Contact Information</h2>
      <section className="contact-section">
        <div className="contact-card">
          <div className="c-h" onClick={toggleInfo}>
            <div className="contact-subject">
              <span className="icon-con">
                <AiFillPhone />
              </span>{" "}
              By Phone
            </div>
            <div className="exp-icon">
              {!showInfo ? <ImCircleDown /> : <ImCircleUp />}
            </div>
          </div>
          <div className={showInfo ? "display-info" : "hide-info"}>
            <p>Available From 8:00 AM to 5:00 PM</p>
            <p>
              +2348065702570 <br /> <br /> +2348082770823
            </p>
          </div>
        </div>
        <div className="contact-card">
          <div className="c-h" onClick={toggleInfo1}>
            <div className="contact-subject">
              <span className="icon-con">
                <AiTwotoneMail />{" "}
              </span>{" "}
              By Email
            </div>
            <div className="exp-icon">
              {!showInfo1 ? <ImCircleDown /> : <ImCircleUp />}
            </div>
          </div>
          <div className={showInfo1 ? "display-info" : "hide-info"}>
            <br />
            <br />
            <br />
            <br />
            <p>ncerdunn@yahoo.com</p>
          </div>
        </div>
        <div className="contact-card">
          <div className="c-h" onClick={toggleInfo2}>
            <div className="contact-subject">
              <span className="icon-con">
                <ImLocation2 />{" "}
              </span>{" "}
              In Person
            </div>
            <div className="exp-icon">
              {!showInfo2 ? <ImCircleDown /> : <ImCircleUp />}
            </div>
          </div>
          <div className={showInfo2 ? "display-info" : "hide-info"}>
            <p>Monday to Friday From 8:00 AM to 5:00 PM</p>
            <p>University of Nigeria, Nsukka, Enugu State, Nigeria</p>
          </div>
        </div>
      </section>
    </div>
  );
}

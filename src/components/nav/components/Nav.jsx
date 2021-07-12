import React, { useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import ncerdlogo from "../assets/ncerdlogo.png";
import ecnlogo from "../assets/ecnlogo.png";
import unnlogo from "../assets/logo1.png";
import "./styles.css";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => {
    setToggle(!toggle);
  };

  const li = [
    {
      link: "/",
      text: "Home"
    },
    {
      link: "/news/",
      text: "News & Events"
    },
    {
      link: "/projects/",
      text: "Projects"
    },
    {
      link: "/about/",
      text: "About"
    },
    {
      link: "/contact/",
      text: "Contact Us"
    }
  ];
  return (
    <div className="navBar">
      <button onClick={Toggle} className="nav-icon">
        {toggle ? <FaTimes /> : <FaAlignRight />}
      </button>
      <div className="navItems">
        <div className="logos">
          <a href="/">
            <img src={ncerdlogo} alt="NCERD-Logo" className="logo ncerdlogo" />
          </a>
          <a href="https://energy.gov.ng" target="_blank">
            <img src={ecnlogo} alt="ecn-Logo" className="logo ecnlogo" />
          </a>
          <a href="https://unn.edu.ng" target="_blank">
            <img src={unnlogo} alt="unn-Logo" className="logo unnlogo" />
          </a>
        </div>

        <ul className={toggle ? "links show-nav" : "links"}>
          {li.map((objLink, i) => {
            return (
              <li key={i} className="nav-list">
                <a href={objLink.link} className="nav-link">
                  {objLink.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <hr className="nav-border" />
    </div>
  );
}

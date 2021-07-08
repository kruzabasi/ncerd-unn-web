import React, { useState } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import ncerdlogo from "../assets/ncerdlogo.png";
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
        <a href="/">
          <img src={ncerdlogo} alt="NCERD-Logo" className="ncerdlogo" />
        </a>
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
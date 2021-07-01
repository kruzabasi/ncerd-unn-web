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
      link: "/staff/",
      text: "Staff Profiles"
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
      <button onClick={Toggle}>
        {toggle ? <FaTimes /> : <FaAlignRight />}
      </button>
      <div className="navItems">
        <div>
          <img src={ncerdlogo} alt="NCERD-Logo" className="ncerdlogo" />
        </div>
        <ul className={toggle ? "links show-nav" : "links"}>
          {li.map((objLink, i) => {
            return (
              <li key={i}>
                <a href={objLink.link}>{objLink.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <hr className="nav-border" />
    </div>
  );
}

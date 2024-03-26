import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ info, lang, changeLang }) => {
  const [themeIcon, setThemeIcon] = useState([
    <i className="fa-solid fa-moon"></i>,
    <i className="fa-solid fa-sun"></i>,
  ]);

  const [toggle, setToggle] = useState(0);

  const themeswitch = () => {
    const docBody = document.querySelector("body");
    docBody.classList.toggle("dark-theme");
    toggle == 0 ? setToggle(1) : setToggle(0);
  };

  return (
    <nav className="nav">
      <div className="nav-title"><a href="#frontpage">Covolan</a></div>
      <ul className="nav__list">
        <li className="nav__list-item"><a href="#projects">{info[lang].bar1}</a></li>
        <li className="nav__list-item"><a href="#skills">{info[lang].bar2}</a></li>
        <li className="nav__list-item"><a href="#contact">{info[lang].bar3}</a></li>
        <li className="nav__list-item">
          <button onClick={() => themeswitch()} className="nav__list-btn">
            {themeIcon[toggle]}
          </button>
        </li>
        <li className="nav__list-item">
          <button onClick={() => changeLang()} className="nav__list-btn">{info[lang].lang}</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Frontpage.css";
import picture from "/picture.jpeg";

const Frontpage = ({ info, lang }) => {
  return (
    <div className="frontpage" id="frontpage">
      <img
        src={picture}
        className="frontpage-picture"
        alt="picture of myself"
      />
      <h1 className="frontpage-salute">
        {info[lang].salute1}
        <span className="salute-highlight">{info[lang].salute2}</span>
      </h1>
      <h2 className="frontpage-subtitle">{info[lang].occupation}</h2>
      <p className="frontpage-description">{info[lang].description}</p>
      <div className="frontpage-links">
        <ul className="frontpage-list">
          <li className="frontpage-item">
            <i className="fa-regular fa-file-lines"></i>
          </li>
          <li className="frontpage-item">
            <a href="https://github.com/covolan" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="frontpage-item">
            <a
              href="https://www.linkedin.com/in/alexandre-covolan/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Frontpage;

import React from "react";
import "./Contact.css";

const Contact = ({info, lang}) => {
  return (
    <div className="contact" id="contact">
      <h3 className="contact-title">{info[lang].titleContact}</h3>

      <ul className="contact-list">
        {info.contacts.map((item) => {
          return(
            <li key={item.name} className="contact-item">
              <a href={item.link} target="_blank"><button className="contact-btn">{item.name}</button></a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Contact;

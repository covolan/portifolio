import React from "react";
import "./Skills.css";

const Skills = ({ info, lang }) => {
  return (
    <div className="skills" id="skills">
      <h3 className="skills-title">{info[lang].titleSkills}</h3>
      <h4 className="skills-subtitle">{info[lang].titleSkillsLang}:</h4>
      <ul className="skills-list">
        {info.skills.languages.map((item) => (
          <li key={item} className="skills-item">
            {item}
          </li>
        ))}
      </ul>
      <h4 className="skills-subtitle">{info[lang].titleSkillsTools}:</h4>
      <ul className="skills-list">
      {info.skills.tools.map((item) => (
          <li key={item} className="skills-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

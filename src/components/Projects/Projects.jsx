import React from "react";
import "./Projects.css";

const Projects = ({ info, lang }) => {
  return (
    <div className="projects" id="projects">
      <h3 className="projects-title">{info[lang].titleProjects}</h3>
      <div className="projects-cards">
        {info[lang].projects.map((proj) => {
          return (
            <div key={proj.title} className="prj">
              <h4 className="prj-title">{proj.title}</h4>
              <img src={proj.image} className="prj-image" alt="" />
              <p className="prj-description">{proj.description}</p>
              <ul className="prj-list-tech">
                {proj.tools.map((item) => {
                  return(

                  <li key={item} className="prj-tech">
                    {item}
                  </li>
                  )
                })}
              </ul>
              <ul className="prj-list-links">
                <li className="prj-link">
                  <a href={proj.links[0]} target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className="prj-link">
                  <a href={proj.links[1]} target="_blank">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

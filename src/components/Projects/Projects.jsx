import React from "react";
import "./Projects.css";
import * as Tooltip from "@radix-ui/react-tooltip";
import ToolTip from "../ToolTip/ToolTip";

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
              <hr className="prj-hr" />
              <ul className="prj-list-tech">
                {proj.tools.map((item) => {
                  return (
                    <li key={item} className="prj-tech">
                      {item}
                    </li>
                  );
                })}
              </ul>
              <hr className="prj-hr" />
              <ul className="prj-list-links">
                <li className="prj-link">
                  <a href={proj.links[0]} target="_blank">
                    <ToolTip
                      Children={
                        <i className="fa-brands fa-github cursor-pointer"></i>
                      }
                      Content={"Github"}
                    />
                  </a>
                </li>
                <li className="prj-link">
                  <a href={proj.links[1]} target="_blank">
                    <ToolTip
                      Children={
                        <i className="fa-solid fa-arrow-right-from-bracket cursor-pointer"></i>
                      }
                      Content={"Link"}
                    />
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

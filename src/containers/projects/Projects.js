import React from "react";
import "./Projects.css"
import ProjectCard from "../../components/projectCard/ProjectCard";
import { Projects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Project() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div className="project-main-div">
        <div className="project-header">
          <h1 className="heading project-heading">{Projects.title}</h1>
          <p className="subTitle project-subtitle">{Projects.subtitle}</p>
        </div>
        <div className="project-cards-div">
          {Projects.projects.map(card => {
            return (
              <ProjectCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}

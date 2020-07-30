import React from "react";
import "./Education.css";
import EduCard from "../../components/blogCard/EduCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Blogs() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="education">
      <div className="edu-header">
        <h1 className="edu-header-text">{educationInfo.title}</h1>
        <p className="subTitle edu-subtitle">{educationInfo.subtitle}</p>
      </div>
      <div className="edu-main-div">
        <div className="edu-text-div">
          {educationInfo.education.map(edu => {
            return (
              <EduCard
                edu={{
                  program: edu.program,
                  school: edu.school,
                  score:edu.score,
                  date:edu.date
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

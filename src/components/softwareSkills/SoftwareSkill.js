import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName} id={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })
          }
        </ul>
        <ul className="dev-icons">
        {skillsSection.MLSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName} id={skills.skillName}>
                <span class="iconify" data-icon={skills.iconName} data-inline="false"></span>
                <p>{skills.skillName}</p>
              </li>
            );
          })
          }
        </ul>
      </div>
    </div>
  );
}

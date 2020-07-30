import React from "react";

export default function ProjectCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (

      <div className="project-card">
        <div className="certificate-detail-div">
          <h5 className="project-card-title">{cardInfo.title}</h5>
          <p className="project-card-subtitle">{cardInfo.description}</p>
        </div>
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => {
            return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
          })}
        </div>
      </div>
  );
}


//note: basically the same as achievement card component which defeats the point of components, but i'm too lazy to make a new one
//TODO: add option to display core technology and languages used
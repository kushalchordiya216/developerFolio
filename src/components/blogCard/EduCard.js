import React from "react";
import "./EduCard.css";

export default function EduCard({ edu }) {

  return (
    <div class="edu-card">
        <h3 className="edu-program">{edu.program}</h3>
        <p class="small">{edu.school}</p>
        <p class="small">{edu.score}</p>
    </div>
  );
}

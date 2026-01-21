/* Hooks */
import React from "react";
import { Link } from "react-router-dom";


function TargetProfile() {
  return (
    <div className="container__target">
      <div className="container__target--photo">
        <img src={profilePhoto} alt="Profile Photo" />
      </div>
      <div className="container__target--name">
        <h2>Joseth Calderón</h2>
      </div>
      <div className="container__target--description">
        <p>Frontend Developer</p>
      </div>
      <div className="container__target--social">
        <Link to={"https://github.com/JosCalCor22"} target={"_blank"} rel={"noreferrer"}>
          <img alt="LinkedIn Icon" />
        </Link>
        <Link to={"https://www.linkedin.com/in/joseth-calderon-a8555022b"} target={"_blank"} rel={"noreferrer"}>
          <img alt="LinkedIn Icon" />
        </Link>
        <Link to={"https://wa.link/u2oxcd"} target={"_blank"} rel={"noreferrer"}>
          <img alt="LinkedIn Icon" />
        </Link>
      </div>
    </div>
  );
}

export { TargetProfile }
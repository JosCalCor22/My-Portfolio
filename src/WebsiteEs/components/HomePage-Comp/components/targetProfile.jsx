/* Hooks */
import React from "react";
import { Link } from "react-router-dom";

/* Components */
import svgLinkedIn from "../../../assets/svg/LinkedIn-Icon.svg";
import svgWhatsapp from "../../../assets/svg/Whatsapp-Icon.svg";
import svgGithub from "../../../assets/svg/Github-Icon.svg";
import profilePhoto from "../img/imgProfilePhoto.png"

function TargetProfile() {
  const svgURL = {
    Github: svgGithub,
    Whatsapp: svgWhatsapp,
    LinkedIn: svgLinkedIn
  }

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
          <img src={svgURL.Github} alt="LinkedIn Icon" />
        </Link>
        <Link to={"https://www.linkedin.com/in/joseth-calderon-a8555022b"} target={"_blank"} rel={"noreferrer"}>
          <img src={svgURL.LinkedIn} alt="LinkedIn Icon" />
        </Link>
        <Link to={"https://wa.link/u2oxcd"} target={"_blank"} rel={"noreferrer"}>
          <img src={svgURL.Whatsapp} alt="LinkedIn Icon" />
        </Link>
      </div>
    </div>
  );
}

export { TargetProfile }
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pfp from "../images/pfp_3.jpeg";
import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="w-100 pt-5">
      <img src={pfp} alt="pfp" className="profile-pic" />
      <h1 className="mt-4 display-4">Hey, I'm Kevin</h1>
      <h3 className="lead">Aspiring AI researcher</h3>
      <div className="d-flex justify-content-center gap-5 no-text-decor mt-3">
        <a href="mailto:kevzhang2022@gmail.com">
          Email
        </a>
        <a href="https://linkedin.com/in/kevinkz">
          <FontAwesomeIcon icon={faLinkedin} />&nbsp;
          LinkedIn
        </a>
        <a href="https://github.com/N1v3x2">
          <FontAwesomeIcon icon={faGithub} />&nbsp;
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Home;

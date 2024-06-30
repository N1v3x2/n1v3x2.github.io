import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import banner_pic from "../images/banner_pic.jpeg";
import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="w-100 home-banner">
      <div className="position-absolute top-50 start-50 translate-middle text-light">
        <h1 className="display-1">Hey, I'm Kevin</h1>
        <h2 className="fw-light">Aspiring AI researcher</h2>
        <div className="mt-4 d-flex justify-content-center gap-4 no-text-decor">
          <a
            href="mailto:kevzhang2022@gmail.com"
            className="btn btn-primary border-radius-980px px-3 py-2 fw-light scale-2 smooth-transition"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/kevinkz"
            className="btn btn-primary border-radius-980px px-3 py-2 fw-light scale-2 smooth-transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            &nbsp; LinkedIn
          </a>
          <a
            href="https://github.com/N1v3x2"
            className="btn btn-primary border-radius-980px px-3 py-2 fw-light scale-2 smooth-transition"
          >
            <FontAwesomeIcon icon={faGithub} />
            &nbsp; GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

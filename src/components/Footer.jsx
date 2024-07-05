import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-muted py-3">
      <div className="container px-3">
        <div className="row">
          <div className="col-12">
            <div className="border-top pt-3">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex">
                  <a
                    href="/"
                    className="text-decoration-none text-muted me-3 mb-2"
                  >
                    <small>Home</small>
                  </a>
                  <a
                    href="/about"
                    className="text-decoration-none text-muted me-3 mb-2"
                  >
                    <small>About</small>
                  </a>
                  <a
                    href="/work"
                    className="text-decoration-none text-muted me-3 mb-2"
                  >
                    <small>Work</small>
                  </a>
                  <a
                    href="/projects"
                    className="text-decoration-none text-muted me-3 mb-2"
                  >
                    <small>Projects</small>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:kevzhang2022@gmail.com"
                    className="text-decoration-none text-muted me-3"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevinkz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-muted me-3"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://github.com/N1v3x2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-muted"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              {/* <p className="mb-0 small">
                Copyright © {new Date().getFullYear()} Kevin Zhang.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

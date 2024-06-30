// src/components/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutPic from "../images/about_pic2.jpeg";
import climbing from "../images/climbing.jpg";
import aggies_invent from "../images/aggies_invent.jpeg";
import spot from "../images/spot.jpeg";
import "./About.css";

const About = () => (
  <section id="about">
    <div className="d-inline-flex flex-column text-start">
      <Container className="mt-5">
        <Row className="gap-5">
          <Col>
            <Row>
              <Col className="px-0">
                <img src={aboutPic} alt="About Pic" className="about-pic p-2" />
              </Col>
              <Col className="px-0">
                <img src={climbing} alt="About Pic" className="about-pic p-2" />
              </Col>
            </Row>
            <Row>
              <Col className="px-0">
                <img
                  src={aggies_invent}
                  alt="About Pic"
                  className="about-pic p-2"
                />
              </Col>
              <Col className="px-0">
                <img src={spot} alt="About Pic" className="about-pic p-2" />
              </Col>
            </Row>
          </Col>
          <Col>
            <h1 className="display-5">Hey! I'm Kevin</h1>
            <p className="">
              I am an aspiring AI researcher passionate about pushing the
              boundaries of what's possible with AI. My ultimate goal is to be
              at the forefront of developing{" "}
              <a href="https://openai.com/index/planning-for-agi-and-beyond/">
                artificial general intelligence:
              </a>{" "}
              AI systems capable of human-level intelligence across all domains.
            </p>
            <p className="">
              I am currently a rising junior computer science student at Texas
              A&M University. Here are some of my research interests:
            </p>
            <ul className="">
              <li>Neural network and transformer architecture</li>
              <li>
                <a href="https://openai.com/index/extracting-concepts-from-gpt-4/">
                  Interpretability
                </a>{" "}
                of neural network parameters
              </li>
              <li>Prompt engineering</li>
              <li>
                Teaching LLMs to
                <a href="https://arxiv.org/abs/2302.04761" className="ms-1">
                  use tools
                </a>
              </li>
              <li>Retrieval-augmented generation (RAG)</li>
              <li>Computational neuroscience</li>
            </ul>
            <p className="">What do I like to do outside of work/academics?</p>
            <ul className="">
              <li>
                I'm rated around around 2000 on{" "}
                <a href="https://www.chess.com/member/n1v3x2">chess.com</a>
              </li>
              <li>I'm pretty into bouldering (currently projecting V3-V4s)</li>
              <li>
                <a href="https://www.alltrails.com/members/kevin-zhang-256">
                  I like hiking
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default About;

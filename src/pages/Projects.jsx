import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import aggie_transit from "../images/aggietransit.png";
import schedumate from "../images/schedumate.png";
import phishalert from "../images/phishalert.png";
import skyguardian from "../images/skyguardian.webp";
import tamids from "../images/tamids.png";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "TAMIDS Student Data Challenge",
    image: tamids,
    description: "Data science competition",
    link: "https://drive.google.com/drive/folders/16qouZf4rzdpIxoM3O_AGdtJyZVJS3vAQ?usp=sharing"
  },
  { id: 2, title: "Phish Alert", image: phishalert, description: "Hackathon", link: "https://devpost.com/software/phishalert" },
  { id: 3, title: "ScheduMate", image: schedumate, description: "Datathon", link: "https://devpost.com/software/schedumate-7elsd6" },
  {
    id: 4,
    title: "Sky Guardian",
    image: skyguardian,
    description: "Entrepreneurial design competition",
    link: "https://docs.google.com/presentation/d/1nNeg2g1aLd8Ip51kj6bQsxUXZxGdPjVSCIsnCNFrMFg/edit?usp=sharing"
  },
  {
    id: 5,
    title: "Aggie Transit",
    image: aggie_transit,
    description: "Mobile app",
    link: "https://apptopia.com/ios/app/1667556068/about"
  },
];

const MasonryPortfolio = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="display-5 mb-4">My Projects</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}>
        <Masonry gutter="15px">
          {projects.map((project) => (
            <a href={project.link} className="minimal-link-style">
              <div key={project.id} className="text-start smooth-transition  scale">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mw-100 border mb-1 rounded-18px smooth-transition hover-shadow"
                />
                <span className="h6">{project.title}</span>
                <p className="mb-1">{project.description}</p>
              </div>
            </a>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryPortfolio;

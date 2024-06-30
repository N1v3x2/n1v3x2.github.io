import React from "react";
import "./Work.css";

const TimelineEvent = ({ event }) => (
  <div className="smooth-transition scale text-start rounded-18px bg-system-gray p-4">
    <div className="title-section">
      <small className="d-inline text-muted">{event.date}</small>
      <h4>{event.company}</h4>
      <h6>{event.position}</h6>
    </div>
    <ul>
      {event.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const Work = () => {
  const events = [
    {
      date: "MAY 2024 — PRESENT",
      company: "Sandia National Laboratories",
      position: "R&D Intern",
      details: [
        "Developing object-oriented statistical analysis tools in MATLAB to support telemetry data analysis",
        "Migrating reflection-based MATLAB data analysis suite dependency to Javalin REST API",
      ],
    },
    {
      date: "MAR 2024 — PRESENT",
      company: "Department of Computer Science & Engineering — Texas A&M",
      position: "Undergraduate Research Assistant",
      details: [
        "Assisting PhD student create retrieval-augmented generation (RAG) pipeline for knowledge graphs",
        "Maximizing LLM info-retrieval factuality by iteratively evaluating Llama-2 and Llama-3 models on 200+ prompt variations, utilizing HuggingFace Transformers library",
        "Interfacing with remote Linux server via SSH to perform LLM inferencing on 7000+ question TriviaQA dataset",
      ],
    },
    {
      date: "JAN — MAY 2024",
      company: "Department of Computer Science & Engineering — Texas A&M",
      position: "Undergraduate Teaching Assistant",
      details: [
        "Fostered interactive learning environment by explaining example problems and encouraging participation among 60 students across 6 weekly lab sections",
        "Guided students through assignments in C++ and LaTeX involving arrays, linked lists, trees, and graphs, and other data structures & algorithms",
      ],
    },
    {
      date: "MAY — AUG 2023",
      company: "Vertical Automation and Information Technology",
      position: "Full Stack Developer Intern",
      details: [
        "Eliminated over 1000 duplicate data points in production MySQL database using Entity Framework",
        "Streamlined task and note creation through developing automated CRM feature leveraging IMAP protocol to fetch emails from an internal company address",
        "Resolved over 60 feature requests and 35 bugs, driven by communication with internal clients via daily stand-ups and task management on Azure DevOps",
      ],
    },
    {
      date: "JUN — AUG 2022",
      company: "Vertical Automation and Information Technology",
      position: "Full Stack Developer Intern",
      details: [
        "Designed schema and connected MySQL database to web app using Entity Framework to handle over 10,000 data points on client information in production database",
        "Achieved 95% screen size compatibility by implementing responsive user interface using HTML, CSS, and Bootstrap",
        "Increased task completion rate by 60% via implementing a full-stack Customer Relationship Management (CRM) solution with ASP.NET Model-View-Controller (MVC) architecture",
      ],
    },
  ];

  return (
    <div className="Work">
      <h1 className="display-5 my-4">Work Experience</h1>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          {events.map((event, index) => (
            <TimelineEvent key={index} event={event} isLeft={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

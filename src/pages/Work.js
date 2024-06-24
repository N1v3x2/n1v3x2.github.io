import React from "react";
import "./Work.css";

const TimelineEvent = ({ event, isLeft }) => (
  <div className={`timeline-event ${isLeft ? 'left' : 'right'}`}>
    <div className="timeline-event-content">
      <div className="timeline-event-icon scale"></div>
      <div className="timeline-event-copy scale">
        <div className="caret"></div>
        <p className="timeline-event-thumbnail">{event.date}</p>
        <h3>{event.company}</h3>
        <h4>{event.position}</h4>
        <ul>
          {event.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Work = () => {
  const events = [
    {
      date: "May 2024 — Present",
      company: "Sandia National Laboratories",
      position: "R&D Intern",
      details: [
        "Developing object-oriented statistical analysis tools in MATLAB to support telemetry data analysis",
        "Migrating reflection-based MATLAB data analysis suite dependency to Javalin REST API",
      ],
    },
    {
      date: "Mar 2024 — Present",
      company: "Department of Computer Science & Engineering — Texas A&M",
      position: "Undergraduate Research Assistant",
      details: [
        "Assisting PhD student create retrieval-augmented generation (RAG) pipeline for knowledge graphs",
        "Maximizing LLM info-retrieval factuality by iteratively evaluating Llama-2 and Llama-3 models on 200+ prompt variations, utilizing HuggingFace Transformers library",
        "Interfacing with remote Linux server via SSH to perform LLM inferencing on 7000+ question TriviaQA dataset",
      ],
    },
    {
      date: "Jan — May 2024",
      company: "Department of Computer Science & Engineering — Texas A&M",
      position: "Undergraduate Teaching Assistant",
      details: [
        "Fostered interactive learning environment by explaining example problems and encouraging participation among 60 students across 6 weekly lab sections",
        "Guided students through assignments in C++ and LaTeX involving arrays, linked lists, trees, and graphs, and other data structures & algorithms",
      ],
    },
    {
      date: "May — Aug 2023",
      company: "Vertical Automation and Information Technology",
      position: "Full Stack Developer Intern",
      details: [
        "Eliminated over 1000 duplicate data points in production MySQL database using Entity Framework",
        "Streamlined task and note creation through developing automated CRM feature leveraging IMAP protocol to fetch emails from an internal company address",
        "Resolved over 60 feature requests and 35 bugs, driven by communication with internal clients via daily stand-ups and task management on Azure DevOps",
      ],
    },
    {
      date: "Jun — Aug 2022",
      company: "Vertical Automation and Information Technology",
      position: "Full Stack Developer Intern",
      details: [
        "Designed schema and connected MySQL database to web app using Entity Framework to handle over 10,000 data points on client information in production database",
        "Achieved 95% screen size compatibility by implementing responsive user interface using HTML, CSS, and Bootstrap",
        "Increased task completion rate by 60% via implementing a full-stack Customer Relationship Management (CRM) solution with ASP.NET Model-View-Controller (MVC) architecture",
      ],
    },
  ];

  // Split events into left and right columns
  const leftEvents = events.filter((_, index) => index % 2 === 0);
  const rightEvents = events.filter((_, index) => index % 2 !== 0);

  return (
    <div className="Work">
      <div className="timeline-container">
        <div className="timeline-column left-column">
          {leftEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} isLeft={true} />
          ))}
        </div>
        <div className="timeline-column right-column">
          {rightEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} isLeft={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
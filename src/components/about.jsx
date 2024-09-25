import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const click = (path) => {
    navigate(path);
  };

  return (
    <section
      className="w3-animate-top profile-section"
      style={{ height: "calc(100vh - 222px)" }}
    >
      <div className="profile-image">
        <img src="/img/profile.jpg" alt="Profile" />
      </div>
      <div className="profile-content">
        <div className="profile-details">
          <h1>VICKY MODI</h1>
          <h2>A Bit About Me</h2>
          <p>
            Developed, tested, deployed, and maintained scalable web and mobile
            applications. Designed and implemented complex menu structures for
            apps.
          </p>
        </div>
        <div className="button-group">
          <a
            target="_blank"
            href="/resume/resume.html"
            className="button resume"
          >
            Resume
          </a>
          <span onClick={() => click("/projects")} className="button projects">
            Projects
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;

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
      className="w3-animate-top profile-section mobile-view"
      style={{ height: "calc(100vh - 152px)" }}
    >
      <div className="profile-image">
        <img src="/img/profile.jpg" alt="Profile" />
      </div>
      <div className="profile-content">
        <div className="profile-details">
          <h1>VICKY MODI</h1>
          <h2>A Bit About Me</h2>
          <p style={{ textAlign: "justify", display: "flex" }}>
            I’m Vicky, your tech guru by day and a dedicated husband all the
            time! I’ve been coding up a storm, but my latest project? Mastering
            husband life! I’ve gone from tackling complex algorithms to solving
            the mystery of “what’s for dinner.” <br />I bring my signature
            brilliance to both the office and home.
            <br /> Known for my sharp tech skills and smooth moves in keeping
            the Wi-Fi and my partner’s patience running smoothly, I’m now
            juggling the roles of innovator and world-class husband.
            <br /> With my charm and humor, there’s no bug I can’t fix or chore
            I can’t “debug”!
          </p>
        </div>
        <div className="button-group">
          <span onClick={() => click("/resume")}>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">My Resume</span>
            </button>
          </span>
          <span onClick={() => click("/projects")}>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">My Projects</span>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;

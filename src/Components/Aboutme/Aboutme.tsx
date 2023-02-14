import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Aboutme = () => {
  return (
    <div className="App-work-section">
      <h2 className="Section-title">ABOUT ME</h2>
      <p>
        I am a creative Full Stack Software Engineer eager to get new challenges
        and learn new things ! Technologies: Javascript (ES6), Typescript,
        ReactJS, NodeJS, MongoDB, Express, NextJS, Axios, HTML & CSS, Git,
        Github, GitLab, Figma, Bootstrap, Sentry, Graphql, PostgreSQL Former
        archive researcher and screenwriter in Paris during ten years, I worked
        on more than 30 different projects, for more than 20 different
        companies. Therefore, I adapt quickly and I know how to work and
        communicate with teams of all disciplines. I will use all my abilities
        learned in Cinema en TV industry in my Developer job. Looking forward to
        applying the knowledge I have acquired in first experiences, Ironhack
        Fullstack Bootcamp and personal coding training in a new company. If you
        have any questions that I can help with, please feel free to reach out
        here on LinkedIn. I look forward to speaking with you!
      </p>
    </div>
  );
};

export default Aboutme;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Aboutme = () => {
  return (
    <div className="App-section" id="aboutSection">
      <h2 className="Section-title">ABOUT ME</h2>
      <p className="About-me-paragraph">
        I am a creative Full Stack Software Engineer eager to get new challenges
        and learn new things ! If you are currently seeking a self-motivated and
        detail-oriented Web Developer, with the capacity to learn in a
        fast-paced environment and adapt quickly to different points of view,
        that's precisely what I'm prepared to bring to the table.
      </p>
      <p className="About-me-paragraph">
        I already have 10 years of experience in the professional world, working
        as a Cinematography Researcher before I discovered my passion for
        coding. I have been surrendered by Engineers friends all my life and It
        took me a pandemic to try to code and realize I did not have a thing
        only for the people, but also for the job.
      </p>
      <p className="About-me-paragraph">
        I have worked on web projects end-to-end in both the Back-end and the
        Front-end. After working in a different industry with hard deadlines and
        tight schedules, I am now fully dedicated to software development and I
        am looking forward to continuing to perfect my skills as I complete
        great projects. I enjoy interacting with different teams and putting
        myself in other people's shoes to maximize the user experience and
        implementation of the designer’s ideas.
      </p>
      <p className="About-me-paragraph">
        Technologies: Javascript (ES6), Typescript, ReactJS, NodeJS, MongoDB,
        Express, NextJS, Axios, HTML & CSS, Git, Github, GitLab, Figma,
        Bootstrap, Sentry, Graphql, PostgreSQL
      </p>
    </div>
  );
};

export default Aboutme;

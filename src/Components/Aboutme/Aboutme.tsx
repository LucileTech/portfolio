import React from "react";
import avatarbis from "./../../Images/mybyelfiebiscopy.webp";

const Aboutme = ({ theme }: { theme: string }) => {
  return (
    <div className="App-section" id="aboutSection">
      <h2 className="Section-title">ABOUT ME</h2>
      <div className="AboutmeContent">
        <div className="AboutmePhoto">
          <img src={avatarbis} alt="avatar" />
        </div>
        <div className="AboutmeText">
          <p className="AboutmeParagraph">
            If you are currently seeking a self-motivated and detail-oriented
            person, with the capacity to learn in a fast-paced environment and
            adapt quickly to different points of view, that's precisely what I'm
            prepared to bring to the table. I enjoy solving problems, learning
            new skills and interacting with different teams.
          </p>
          <p className="AboutmeParagraph">
            I already have 10 years of experience in the professional world,
            working as a Cinematography Researcher before I discovered my
            passion for coding. I have been surrounded by Engineers friends all
            my life and it took me a pandemic to try to code and realize I did
            not have a thing only for the people, but also for the job.
          </p>
          <p className="AboutmeParagraph">
            I have worked on web projects end-to-end in both the Back-end and
            the Front-end. After working in a different industry with hard
            deadlines and tight schedules, I am now fully dedicated to software
            development and I am constantly perfecting my skills as I complete
            great projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

import React from "react";
import avatarbis from "./../../Images/mybyelfiebiscopy.webp";
import logo from "./../../Images/logowhite.png";

const Aboutme = ({ theme }: { theme: string }) => {
  return (
    <div className="App-section" id="aboutSection">
      <h2 className="Section-title">ABOUT ME</h2>
      <div className="AboutmeContent">
        <div className="AboutmeText">
          <p className="AboutmeParagraph">
            I have been surrounded by Engineers friends all my life and it took
            me a pandemic to try to code and realize I did not have a thing only
            for the people, but also for the job. I am now wholeheartedly
            devoted to crafting efficient code that contributes to building a
            better world.
          </p>
          <p className="AboutmeParagraph">
            I have worked on web projects end-to-end in both the Back-end and
            the Front-end and I am constantly perfecting my skills as I complete
            great projects.
          </p>
          <p className="AboutmeParagraph">
            Bringing 10 years of expertise from the film and archives industry,
            I worked on more than 30 different projects, for more than 20
            different companies. Therefore, I adapt quickly and I know how to
            work and communicate with teams of all disciplines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

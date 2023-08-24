import React from "react";
import avatarbis from "./../../Images/mybyelfiebiscopy.webp";

const Reviews = ({ theme }: { theme: string }) => {
  return (
    <div className="App-section" id="reviewsSection">
      <h2 className="Section-title">REVIEWS</h2>
      <div className="AboutmeContent">
        <div className="AboutmeText">
          <p className="AboutmeParagraph">
            It was a pleasure working with Lucile. She is listening, and
            applying accurately our will with lots of motivation. She is doing
            the extra mile on each of her task. It was a great pleasure working
            with her! Welcome any time!
          </p>
          <p className="AboutmeParagraph">
            Marie-Esther Rouffet-Degbelo, CEO & Co-founder @Koalou
          </p>
          <p className="AboutmeParagraph">
            Lucile is passionate, she likes to dive 100% into her projects and
            is curious in all her approaches. She will always look for solutions
            and doesn’t get demotivated at the slightest bug: she won’t give up
            until she has debugged it, she is not a fullstack developer for
            nothing. Lucile has many assets for teamwork: she has a very good
            ability to lead and frame a project but she is also very good at
            collaborating and communicating during critical moments.
          </p>
          <p className="AboutmeParagraph">
            Amélie Chabrand, Project Manager at Numberly
          </p>
          <p className="AboutmeParagraph">
            Lucile is a pleasure to work with! She's a web developer with great
            communication and learning skills, and is very organized. Lucile
            truly is an asset in a team, as she is always friendly and a real
            problem solver. I had the chance to work with her on a few projects,
            and I cannot recommend her enough!
          </p>
          <p className="AboutmeParagraph">
            Ines Zallouz, Full Stack Developer at Capgemini
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

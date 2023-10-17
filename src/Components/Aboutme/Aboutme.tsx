import React from "react";

type AboutMeProps = {
  theme: string;
};

const Aboutme: React.FC<AboutMeProps> = ({ theme }) => {
  return (
    <div className="App-section" id="aboutSection">
      <h2 className="Section-title">ABOUT ME</h2>
      <div className="AboutmeContent">
        <div className="AboutmeText">
          <p className="AboutmeParagraph">
            I am wholeheartedly devoted to crafting efficient code to contribute
            to a better world. With experience in end-to-end web development,
            covering both Back-end and Front-end, I continually refine my skills
            through challenging projects.
          </p>
          <p className="AboutmeParagraph">
            I bring a unique perspective as a career transitioner, with over 10
            years of expertise in the film and archives industry. I've
            contributed to more than 30 different projects for over 20 different
            companies, allowing me to adapt quickly and collaborate effectively
            with diverse teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

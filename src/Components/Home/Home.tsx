import React from "react";
import avatar from "./../../Images/LucileTech.jpeg";

type HomeProps = {
  theme: string;
};

const Home: React.FC<HomeProps> = ({ theme }) => {
  return (
    <div className="App-homepage" id="homeSection">
      <div className={`Home-title ${theme}`}>
        <img className="avatarbis" src={avatar} alt="avatar" />
        <div className="intro-post-it-now">
          <p className="line-1 anim-typewriter">Hi!</p>
        </div>
        <div>
          I am <span className="homeName">Lucile Tronczyk</span>,
        </div>
        <div>Web Developer & Full Stack Software Engineer</div>
      </div>
    </div>
  );
};

export default Home;

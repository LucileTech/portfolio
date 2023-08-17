import React from "react";
import avatar from "./../../Images/LucileTech.jpeg";

const Home = ({ theme }: { theme: string }) => {
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
        <div>Full Stack Web Developer</div>
      </div>
    </div>
  );
};

export default Home;

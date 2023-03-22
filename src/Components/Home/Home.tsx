import React from "react";
import avatar from "./../../Images/mebyelfie.webp";

const Home = ({ theme }: { theme: string }) => {
  return (
    <div className="App-homepage" id="homeSection">
      <img className="avatarbis" src={avatar} alt="avatar" />
      <div className={`Home-title ${theme}`}>
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

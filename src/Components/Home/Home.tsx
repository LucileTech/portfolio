import React, { useEffect } from "react";
import avatar from "./../../Images/LucileTech.webp";
import avatarSmall from "./../../Images/LucileTech_small.webp";
import avatarMedium from "./../../Images/LucileTech_medium.webp";
import avatarLarge from "./../../Images/LucileTech_large.webp";

type HomeProps = {
  theme: string;
};

const Home: React.FC<HomeProps> = ({ theme }) => {
  return (
    <div className="App-homepage" id="homeSection">
      <div className={`Home-title ${theme}`}>
        <img
          className="avatarbis"
          src={avatarLarge}
          srcSet={`${avatarSmall} 600w, ${avatarMedium} 1200w, ${avatarLarge} 1920w`}
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1920px"
          alt="avatar"
        />
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

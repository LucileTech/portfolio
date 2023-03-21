import React from "react";
import avatar from "./../Images/mebyelfie.jpeg";

const Home = ({ theme }: { theme: string }) => {
  return (
    <div className="App-homepage">
      <img
        // className="avatar"
        className="avatarbis"
        src={avatar}
        alt="avatar"
      />
      <p className={`Home-title-${theme}`}>
        <div>
          I am <span className="homeName">Lucile Tronczyk</span>,
        </div>
        <div>Full Stack Web Developer</div>
        <div>Nice to meet you!</div>
      </p>
    </div>
  );
};

export default Home;

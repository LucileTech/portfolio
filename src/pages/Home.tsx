import React from "react";
import logo from "./../logowhite.png";
import avatar from "./../Images/aquarelavatar2.png";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Works from "./../Components/Works/Works";
import Contact from "./../Components/ContactForm/ContactForm";

const Home = ({ theme }: { theme: string }) => {
  return (
    <div className="App-homepage">
      <p className={`Home-title-${theme}`}>
        <div>
          I am <span className="homeName">Lucile Tronczyk</span>,
        </div>
        <div>Full Stack Web Developer</div>
        <div>Nice to meet you!</div>
      </p>
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
  );
};

export default Home;

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
        I am Lucile Tronczyk, Full Stack Web Developer Nice to meet you!
      </p>
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
  );
};

export default Home;

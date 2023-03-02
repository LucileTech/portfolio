import React from "react";
import logo from "./../logowhite.png";
import avatar from "./../Images/aquarelavatar2.png";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = ({ theme }: { theme: string }) => {
  return (
    <div className="App-homepage">
      <Link className="App-homepage Home-title" to="/works">
        <p>
          <img className="avatar" src={avatar} alt="avatar" />
        </p>
        {/* <p>
          <img className={`LT-logo-${theme}`} src={logo} alt="logo" />
        </p> */}
        <p className={`Home-title-${theme}`}>
          Hi! I am Lucile Tronczyk, Full Stack Web Developer in San Francisco,
          CA
        </p>
      </Link>
      <div className="App-homepage-buttons">
        <Link to="/contact">
          <button className="button-55">Contact me</button>
        </Link>
        <Link to="/about">
          <button className="button-55">Know more about my</button>
        </Link>
        <Link to="/works">
          <button className="button-55">My projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import logo from "./../logowhite.png";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = ({ theme }: { theme: string }) => {
  return (
    <>
      <Link className="App-homepage Home-title" to="/works">
        <p>
          <img className={`LT-logo-${theme}`} src={logo} alt="logo" />
        </p>
        <p className={`Home-title-${theme}`}>Lucile Tronczyk</p>
        <p className={`Home-title-${theme}`}>
          Full Stack Software Engineer in San Francisco
        </p>
      </Link>
    </>
  );
};

export default Home;

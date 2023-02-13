import React from "react";
import logo from "./../logowhite.png";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link className="App-homepage" to="/works">
        <p>
          <img className="LT-logo" src={logo} alt="logo" />
        </p>
        <p>Lucile Tronczyk</p>
        <p>Full Stack Software Engineer in San Francisco</p>
      </Link>
    </>
  );
};

export default Home;

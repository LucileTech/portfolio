import React from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Works = () => {
  return (
    <>
      <div className="navbar-entire">
        <div className="navbar-left">
          <Link to="/">KOALOU</Link>
          <p>A Website and a Web app for children mental health</p>
          <a>VIEW</a>
          <Link to="/">OCTOPUS</Link>
          <p>AN E COMMERCE FOR ARTISTS AND CREATORS</p>
          <a>VIEW</a>
          <Link to="/">POST IT</Link>
          <p>A web app for organization</p>
          <a>VIEW</a>
          <Link to="/">THE CAT AND THE FANTASTIC FOREST</Link>
          <p>A browser game</p>
          <a>VIEW</a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Works;

import React from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Works = () => {
  return (
    <>
      <div className="App-work-section">
        <h2 className="Section-title">MY WORK</h2>
        <div className="navbar-left">
          <div className="grid-container">
            <div className="grid-item">KOALOU</div>
            <div className="grid-item">
              A Website and a Web app for children mental health
            </div>
            <div className="grid-item">VIEW</div>

            <div className="grid-item">OCTOPUS</div>
            <div className="grid-item">
              AN E COMMERCE FOR ARTISTS AND CREATORS
            </div>
            <div className="grid-item">VIEW</div>

            <div className="grid-item">POST IT</div>
            <div className="grid-item">A web app for organization</div>
            <div className="grid-item">VIEW</div>

            <div className="grid-item">THE CAT AND THE FANTASTIC FOREST</div>
            <div className="grid-item">A browser game</div>
            <div className="grid-item">VIEW</div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Works;

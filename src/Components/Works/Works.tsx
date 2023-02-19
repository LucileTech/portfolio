import React from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Works = () => {
  return (
    <>
      <div className="App-work-section">
        <h2 className="Section-title">MY WORK</h2>
        <div>
          <div className="grid-container">
            <div className="grid-item">KOALOU</div>
            <div className="grid-item">
              A Website and a Web app for children mental health
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.koalou.com/book"
              className="grid-item"
            >
              VIEW
            </a>

            <div className="grid-item">OCTOPUS</div>
            <div className="grid-item">
              AN E COMMERCE FOR ARTISTS AND CREATORS
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LucileTech/octopus-ecommerce-client"
              className="grid-item"
            >
              VIEW
            </a>

            <div className="grid-item">POST IT</div>
            <div className="grid-item">A web app for organization</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LucileTech/post-it-project"
              className="grid-item"
            >
              VIEW
            </a>

            <div className="grid-item">THE CAT AND THE FANTASTIC FOREST</div>
            <div className="grid-item">A browser game</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LucileTech/the-cat-and-the-fantastic-forest"
              className="grid-item"
            >
              VIEW
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Works;

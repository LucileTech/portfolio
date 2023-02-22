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
            <div className="grid-item grid-item-left title">KOALOU</div>
            <div className="grid-item grid-item-center resume">
              A Website and a Web app for children mental health
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.koalou.com/book"
              className="grid-item grid-item-right link"
            >
              VIEW
            </a>

            <div className="grid-item grid-item-left title">OCTOPUS</div>
            <div className="grid-item grid-item-center resume">
              An E-commerce Website for artists and creators
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LucileTech/octopus-ecommerce-client"
              className="grid-item grid-item-right link"
            >
              VIEW
            </a>

            <div className="grid-item grid-item-left title">POST IT</div>
            <div className="grid-item grid-item-center resume">
              A web app for organization
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LucileTech/post-it-project"
              className="grid-item grid-item-right link"
            >
              VIEW
            </a>

            <div className="grid-item grid-item-left title" id="cat-title">
              THE CAT AND THE FANTASTIC FOREST
            </div>
            <div className="grid-item grid-item-center resume">
              A browser game
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LucileTech/the-cat-and-the-fantastic-forest"
              className="grid-item grid-item-right link"
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

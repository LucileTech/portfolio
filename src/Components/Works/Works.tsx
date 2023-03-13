import React, { useState } from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import koalou from "./../../Images/koalou3.png";
import octopus from "./../../Images/octopus3.png";
import postit from "./../../Images/postit1.png";
import catgame from "./../../Images/catgame1.png";

const Works = () => {
  return (
    <>
      <div className="App-section App-work-section" id="projectsSection">
        <h2 className="Section-title">MY WORK</h2>
        <div>
          <div className="grid-container">
            <div className="grid-item">
              <img className="projectView" alt="projectView" src={koalou}></img>
              <h3>Koalou</h3>
              <p>A Website and a Web app for children mental health</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.koalou.com/book"
                className="grid-item grid-item-right link"
              >
                The code
              </a>
            </div>

            <div className="grid-item grid-item-left title">
              <img
                className="projectView"
                alt="projectView"
                src={octopus}
              ></img>
              <h3>Octopus</h3>
              <p>An E-commerce Website for artists and creators</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucileTech/octopus-ecommerce-client"
                className="grid-item grid-item-right link"
              >
                The code
              </a>
            </div>

            <div className="grid-item grid-item-left title">
              <img className="projectView" alt="projectView" src={postit}></img>
              <h3>Post-It</h3>
              <p>A web app for organization</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucileTech/post-it-project"
                className="grid-item grid-item-right link"
              >
                The code
              </a>
            </div>

            <div className="grid-item grid-item-left title" id="cat-title">
              <img
                className="projectView"
                alt="projectView"
                src={catgame}
              ></img>
              <h3>THE CAT AND THE FANTASTIC FOREST</h3>
              <p>A browser game</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucileTech/the-cat-and-the-fantastic-forest"
                className="grid-item grid-item-right link"
              >
                The code
              </a>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Works;

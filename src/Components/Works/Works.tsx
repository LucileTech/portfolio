import React, { useState } from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import koalou from "./../../Images/koalou3.png";
import octopus from "./../../Images/octopus3.png";
import postit from "./../../Images/postit1.png";
import catgame from "./../../Images/catgame1.png";

const Works = ({ theme }: { theme: string }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="App-section App-work-section" id="projectsSection">
      <h2 className="Section-title">MY WORK</h2>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={koalou} alt="koalou"></img>
              <h3>Koalou</h3>
              <h5>A startup committed to the mental well-being of children</h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p className="projectTasks">
                What I did :
                <ul className="projectTasksList">
                  <li>
                    Implemented new React components with React and Typescript,
                    with Back End calls and RESTful API endpoints
                  </li>
                  <li>
                    Implemented a new design when a certain type of user is
                    connected (Children authentification vs Parents
                    authentification)
                  </li>
                  <li>
                    Built entire responsive Web Pages with React.js and Next.js,
                    using React-Bootstrap for the Web Site
                  </li>
                  <li>
                    Reproduced Figma web designs, implemented a redesign of 2
                    pages, created 5 pages
                  </li>
                  <li>Collaborated with passion on GitLab</li>
                  <li>
                    Worked in a technical environment with Graphql, PostgreSQL,
                    Sentry, Google Analytics
                  </li>
                </ul>
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={octopus} alt="octopus"></img>
              <h3>Octopus</h3>
              <h5>A startup committed to the mental well-being of children</h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p className="projectTasks">
                <h5>An e commerce for artists and creators</h5>
                What I did :
                <ul className="projectTasksList">
                  <li>
                    Coded Back End and Front End from scratch with Node.js,
                    React, JavaScript, Express.js, CSS & HTML
                  </li>
                  <li>Made designs on Figma and converted them into UI</li>
                  <li>
                    Integrated React user-facing components with back-end
                    services and responsive design and UX
                  </li>
                  <li>
                    Built an API with Node.js and tested it with Postman, used
                    MongoDB with Mongoose connectors, implemented admin rights
                  </li>
                  <li>
                    Deployed with Netlify and hosted the data with MongoDB Atlas
                  </li>
                </ul>
              </p>
              <a
                href="https://github.com/LucileTech/octopus-ecommerce-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Code
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={postit} alt="post-it"></img>
              <h3>Post It</h3>
              <h5>A startup committed to the mental well-being of children</h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p className="projectTasks">
                <h5>An organizational App</h5>
                What I did :
                <ul className="projectTasksList">
                  <li>
                    Coded Back End and Front End from scratch with JavaScript,
                    Axios, Express.js, Node.js, Handlebars.js, MongoDB, CSS &
                    HTML
                  </li>
                  <li>Implemented the API with MongoDB on MondoDB Cloud</li>
                  <li>Created the authentification</li>
                  <li>
                    Deployed with Onrender and hosted the data with MongoDB
                    Atlas
                  </li>
                </ul>
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucileTech/post-it-project"
              >
                The Code
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={catgame} alt="cat-game"></img>
              <h3>The Cat and The Fantastic Forest</h3>
              <h5>A startup committed to the mental well-being of children</h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p className="projectTasks">
                <h5>A browser game</h5>
                What I did :
                <ul className="projectTasksList">
                  <li>Coded with JavaScript, CSS & HTML</li>
                  <li>Endeled the animation with Canvas</li>
                  <li>Deployed with Git Pages</li>
                </ul>
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LucileTech/the-cat-and-the-fantastic-forest"
              >
                The Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

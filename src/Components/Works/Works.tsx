import React, { useState } from "react";
import koalou from "./../../Images/koalou3.png";
import octopus from "./../../Images/octopus3.png";
import postit from "./../../Images/postit1.png";
import catgame from "./../../Images/catgame1.png";
import onecomunity from "./../../Images/onecomunity.png";
import imagevault from "./../../Images/imagevault.png";

const Works = ({ theme }: { theme: string }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="App-section App-work-section" id="projectsSection">
      <h2 className="Section-title work">MY WORK</h2>
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
              <div className="projectTasks">
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
                    using React-Bootstrap for the Web Site, based on Figma web
                    designs
                  </li>
                  <li>
                    Worked in a technical environment with Graphql, PostgreSQL,
                    Sentry, Google Analytics, collaborated with passion on
                    GitLab
                  </li>
                </ul>
              </div>
              <a
                href="https://www.koalou.com/zencool"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                The WebSite
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={imagevault} alt="imagevault"></img>
              <h3>Image Vault</h3>
              <h5>
                A place for museums, archives, and cultural organizations to
                share their collections.
              </h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <div className="projectTasks">
                What I did :
                <ul className="projectTasksList">
                  <li>
                    Took part in meetings and worked in team with Agile
                    Methodology
                  </li>
                  <li>
                    Contributed to Developers best practices for working
                    efficiently as a team with Github and Github Project
                  </li>
                  <li>
                    Coded my tasks with React and Redux, Typescript, Next.
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/chingu-voyages/v44-tier3-team-37"
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
              <img src={onecomunity} alt="onecomunity"></img>
              <h3>One Comunity</h3>
              <h5>
                A global change organization creating blueprints, tools,
                tutorials for all aspects of sustainable living and creating
              </h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <div className="projectTasks">
                What I did :
                <ul className="projectTasksList">
                  <li>
                    Maintained, optimized, and managed the in-use web
                    application built with Node.js, React.js and MongoDB with
                    more than 60 Developers
                  </li>
                  <li>
                    Submitted PR reviews, tested the app and searched for bugs
                    and submitted them
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/OneCommunityGlobal"
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
              <div className="choresapp">
                <h5 id="comingsoon">Coming soon</h5>
              </div>
              <h3>Chores App</h3>
              <h5>A fun Chores App for parents and their children</h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <div className="projectTasks">
                What I did :
                <ul className="projectTasksList">
                  <li>
                    Took part in design meetings to understand the design
                    progress/purposes, and contributing ideas
                  </li>
                  <li>
                    Contributed to Developers best practices for working
                    efficiently as a team: Tickets Integration, Codebase
                    Structure and File Naming conventions, Branches
                    Nomenclature, Pull request template, PR resolution
                  </li>
                  <li>
                    Started the code from scratch with React and Redux on the
                    Front and Node.js and PostreSQL on the back.
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/LucileTech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <img src={octopus} alt="octopus"></img>
              <h3>Octopus</h3>
              <h5>An e-commerce for artists and creators</h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <div className="projectTasks">
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
              </div>
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
              <h5>An organizational Web App</h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <div className="projectTasks">
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
              </div>
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
              <h5>A browser game</h5>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <div className="projectTasks">
                What I did :
                <ul className="projectTasksList">
                  <li>Coded with JavaScript, CSS & HTML</li>
                  <li>Endeled the animation with Canvas</li>
                  <li>Deployed with Git Pages</li>
                </ul>
              </div>
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

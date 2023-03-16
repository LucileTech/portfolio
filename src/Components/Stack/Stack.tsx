import React from "react";
// import "./Navbar.css";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Stack = (props: { theme: String }) => {
  let theme = useOutletContext();

  return (
    <div className="Stack-entire" id="stackSection">
      <h2 className="Section-title">MY TECH STACK</h2>
      {/* <div className="Tech-stack">
        <img
          src="https://res.cloudinary.com/dsioshcio/image/upload/v1670944889/MERN-logo_fx0noa.png"
          alt="Mern"
          className="Mern"
        />
      </div> */}

      <div className="honeycomb">
        <div className="ibws-fix">
          <div className="hexagon">
            <div className="hexagontent">JavaScript</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">HTML</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">CSS</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">React</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Redux</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Handlebars</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Bootstrap</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Canvas</div>
          </div>
        </div>
        <div className="ibws-fix">
          <div className="hexagon">
            <div className="hexagontent">Sentry</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Postman</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">MongoDB</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">JSON</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">REST API</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">NoSQL</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Node</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Express</div>
          </div>
        </div>
        <div className="ibws-fix">
          <div className="hexagon">
            <div className="hexagontent">MongoDB</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Git</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">GitHub</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">GitLab</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">PhotoShop</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Figma</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">VSCode</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Slack</div>
          </div>
        </div>
        <div className="ibws-fix">
          <div className="hexagon">
            <div className="hexagontent">Trello</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">OOP</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Docker</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">CMS</div>
          </div>
          {/* <div className="hexagon">
            <div className="hexagontent">TO</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">LEARN</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">MORE</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">...</div>
          </div> */}
        </div>
        {/* <div className="ibws-fix">
          <div className="hexagon">
            <div className="hexagontent">
              <h1>IF</h1>
            </div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">&mdash; Rudyard Kipling</div>
          </div>
          <div className="hexanone">
            <div className="hexagontent"></div>
          </div>
          <div className="hexagon">
            <div className="hexagontent"></div>
          </div>
          <div className="hexagon">
            <div className="hexagontent"></div>
          </div>
          <div className="hexanone">
            <div className="hexagontent"></div>
          </div>
          <div className="hexagon">
            <div className="hexagontent"></div>
          </div>
          <div className="hexagon">
            <div className="hexagontent"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Stack;

import React from "react";

const Stack = (props: { theme: String }) => {
  return (
    <div className="Stack-entire" id="stackSection">
      <h2 className="Section-title">MY TECH STACK</h2>

      <div className="honeycomb">
        <div className="ibws-fix">
          <div className="hexagon">
            <div className="hexagontent bold">JavaScript</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent bold">HTML</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent bold">CSS</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent bold">React</div>
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
            <div className="hexagontent bold">Node.js</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent bold">Express</div>
          </div>
        </div>
        <div className="ibws-fix">
          <div className="hexagon">
            <div className="hexagontent bold">MongoDB</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent bold">Git</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">GitLab</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent bold">GitHub</div>
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
            <div className="hexagontent">PostgreSQL</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">Jest</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">React Testing Library</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent">React Native</div>
          </div>
          <div className="hexagon">
            <div className="hexagontent bold">SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;

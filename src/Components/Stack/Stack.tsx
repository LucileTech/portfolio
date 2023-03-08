import React from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Stack = () => {
  return (
    <div className="Stack-entire">
      <h2 className="Section-title">MY TECH STACK</h2>
      <div className="Tech-stack">
        <img
          src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg"
          title="Typescript"
          alt="Typescript"
          height="40"
        />
        <img
          src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg"
          title="JavaScript"
          alt="JavaScript"
          width="40"
          height="40"
        />
        &nbsp;
        <img
          src="https://res.cloudinary.com/dsioshcio/image/upload/v1670944889/MERN-logo_fx0noa.png"
          title="Mern"
          alt="Mern"
          height="50"
        />
        <img
          src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg"
          title="HTML5"
          alt="HTML"
          width="40"
          height="40"
        />
        &nbsp;
        <img
          src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"
          title="CSS3"
          alt="CSS"
          width="50"
          height="50"
        />
        &nbsp;
        <img
          src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg"
          title="Git"
          alt="Git"
          width="60"
          height="40"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/handlebars/handlebars-original-wordmark.svg"
          title="Handlebars"
          alt="Handlebars"
          width="60"
          height="40"
        />
        &nbsp;
      </div>
    </div>
  );
};

export default Stack;

import React from "react";
// import "./Navbar.css";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Stack = (props: { theme: String }) => {
  let theme = useOutletContext();

  return (
    <div className="Stack-entire" id="stackSection">
      <h2 className="Section-title">MY TECH STACK</h2>
      <div className="Tech-stack">
        <img
          src="https://res.cloudinary.com/dsioshcio/image/upload/v1670944889/MERN-logo_fx0noa.png"
          alt="Mern"
          className="Mern"
        />
        <p className={`${props.theme}-stack`}>
          React, Typescript, JavaScript, HTML5, CSS3, Git, handelbars
        </p>
      </div>
    </div>
  );
};

export default Stack;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./../Components/Navbar/Navbar";
import Home from "./../pages/Home";
import Stack from "./../Components/Stack/Stack";
import Works from "./../Components/Works/Works";
import Contact from "./../Components/ContactForm/ContactForm";
import About from "./../Components/Aboutme/Aboutme";

const HomePortfolio = () => {
  const [theme, setTheme] = React.useState<string>("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={`${theme}`}>
      <Navbar theme={theme}></Navbar>
      <Home theme={theme}></Home>
      <Stack theme={theme}></Stack>
      <About></About>
      <Works></Works>
      <Contact></Contact>
      <div className="Footer-toggle">
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"> </span>
        </label>
      </div>
    </div>
  );
};

export default HomePortfolio;

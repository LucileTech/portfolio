import React, { useState, useEffect } from "react";
import "./App.css";
import WithoutNav from "./Utils/Withoutnav";
import WithNav from "./Utils/Withnav";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Octopus from "./pages/Octopus";
// import PostIt from "./pages/Postit";
import CatGame from "./pages/CatGame";

import Works from "./components/Works/Works";
import Contact from "./components/ContactForm/ContactForm";
import Aboutme from "./components/Aboutme/Aboutme";
import ContactForm from "./components/ContactForm/ContactForm";

import {
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  useLocation,
} from "react-router-dom";

function App() {
  const [theme, setTheme] = React.useState<string>("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const HomeCheck = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathRoot = currentPath.split("/")?.[1];
    return pathRoot;
  };

  return (
    <div className={`${theme}`}>
      <div className="Header">
        {/* if HomePage, does not display */}
        {!HomeCheck() ? (
          ""
        ) : (
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round"> </span>
          </label>
        )}
      </div>

      <div className="Navigation">
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/works/octopus" element={<Octopus />} />
            <Route path="/works/catgame" element={<CatGame />} />
          </Route>
          <Route element={<WithNav theme={theme} />}>
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/contact" element={<ContactForm />} />
          </Route>
        </Routes>
      </div>

      <div className="Footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

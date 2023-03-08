import React, { useState, useEffect } from "react";
import "./App.css";
import WithoutNav from "./Utils/Withoutnav";
import WithNav from "./Utils/Withnav";
import NavBar from "./Components/Navbar/Navbar";
import NavBurger from "./Components/Navbar/Navburger";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import HomePortfolio from "./pages/HomePortfolio";

import Octopus from "./pages/Octopus";
// import PostIt from "./pages/Postit";
import CatGame from "./pages/CatGame";

import Works from "./Components/Works/Works";
import Contact from "./Components/ContactForm/ContactForm";
import Aboutme from "./Components/Aboutme/Aboutme";
import ContactForm from "./Components/ContactForm/ContactForm";

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
  const [hamburgerOpen, sethamburgerOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const toggleHamburger = () => {
    sethamburgerOpen(!hamburgerOpen);
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
          <div className="header-with-nav">
            <div className="header-display">
              <div className="hamburger" onClick={toggleHamburger}>
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
              </div>

              <label className="switch">
                <input type="checkbox" onClick={toggleTheme} />
                <span className="slider round"> </span>
              </label>
            </div>
            <div>
              {!hamburgerOpen ? "" : <NavBurger theme={theme}></NavBurger>}
            </div>
          </div>
        )}
      </div>

      {/* <div className="Navigation"> */}
      <div>
        <Routes>
          <Route element={<WithNav theme={theme} />}>
            <Route path="/" element={<HomePortfolio theme={theme} />} />
          </Route>
        </Routes>
        {/* <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<HomePortfolio theme={theme} />} />
            <Route path="/works/octopus" element={<Octopus />} />
            <Route path="/works/catgame" element={<CatGame />} />
          </Route>
          <Route element={<WithNav theme={theme} />}>
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/contact" element={<ContactForm />} />
          </Route>
        </Routes> */}
      </div>

      <div className="Footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

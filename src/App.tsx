import React, { useState, useEffect } from "react";
import "./App.css";
import HomePortfolio from "./pages/HomePortfolio";
// import Octopus from "./pages/Octopus";
// import PostIt from "./pages/Postit";
// import CatGame from "./pages/CatGame";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const HomeCheck = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathRoot = currentPath.split("/")?.[1];
    return pathRoot;
  };

  return (
    <>
      {/* <div className="Header">
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
      </div> */}

      {/* <div className="Navigation"> */}
      <div>
        <Routes>
          {/* <Route element={<WithNav theme={theme} />}> */}
          <Route path="/" element={<HomePortfolio />} />
          {/* </Route> */}
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
    </>
  );
}

export default App;

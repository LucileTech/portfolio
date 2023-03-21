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
      <div>
        <Routes>
          {/* <Route element={<WithNav theme={theme} />}> */}
          <Route path="/" element={<HomePortfolio />} />
          {/* </Route> */}
        </Routes>
        {/* <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/works/octopus" element={<Octopus />} />
            <Route path="/works/catgame" element={<CatGame />} />
          </Route>
        </Routes> */}
      </div>
    </>
  );
}

export default App;

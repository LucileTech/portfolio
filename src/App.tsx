import React, { useState, useEffect } from "react";
import "./App.css";
import HomePortfolio from "./pages/HomePortfolio";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  // const HomeCheck = () => {
  //   const location = useLocation();
  //   const currentPath = location.pathname;
  //   const pathRoot = currentPath.split("/")?.[1];
  //   return pathRoot;
  // };

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePortfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

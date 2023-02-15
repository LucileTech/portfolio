import React from "react";
import "./App.css";
import WithoutNav from "./Utils/Withoutnav";
import WithNav from "./Utils/Withnav";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Octopus from "./pages/Octopus";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Aboutme from "./components/Aboutme/Aboutme";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Navigation">
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Home />} />
            <Route path="/works/octopus" element={<Octopus />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/contact" element={<Contact />} />
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

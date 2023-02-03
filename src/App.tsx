import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="wrapper">
        <div id="content">
          <div className="scroll">
            <span>SCROLL</span>

            <svg viewBox="0 0 24 24">
              <line className="st1" x1="12" y1="1" x2="12" y2="22.5" />
              <line className="st1" x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
              <line className="st1" x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

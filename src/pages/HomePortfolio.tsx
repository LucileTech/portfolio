import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Navbar from "./../Components/Navbar/Navbar";
import Home from "./../Components/Home/Home";
import Stack from "./../Components/Stack/Stack";
import Works from "./../Components/Works/Works";
import Contact from "./../Components/ContactForm/ContactForm";
import About from "./../Components/Aboutme/Aboutme";
import Footer from "./../Components/Footer/Footer";

const HomePortfolio = () => {
  const [theme, setTheme] = React.useState<string>("light");
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return (
      <div className="preLoader">
        <ReactLoading
          type={"spinningBubbles"}
          color={"#a3dafb"}
          height={200}
          width={200}
        />
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme}></Navbar>
      <Home theme={theme}></Home>
      <Stack theme={theme}></Stack>
      <About theme={theme}></About>
      <Works theme={theme}></Works>
      <Contact theme={theme}></Contact>
      <div className="Footer-toggle">
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"> </span>
        </label>
      </div>
      <Footer theme={theme}></Footer>
    </div>
  );
};

export default HomePortfolio;

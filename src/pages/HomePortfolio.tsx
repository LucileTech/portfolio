import React, { useState, useEffect, Suspense, lazy } from "react";
import ReactLoading from "react-loading";

// Lazy load the components that aren't immediately needed
const Navbar = lazy(() => import("./../Components/Navbar/Navbar"));
const Home = lazy(() => import("./../Components/Home/Home"));
const About = lazy(() => import("./../Components/Aboutme/Aboutme"));
const Stack = lazy(() => import("./../Components/Stack/Stack"));
const Reviews = lazy(() => import("./../Components/Reviews/Reviews"));
const Works = lazy(() => import("./../Components/Works/Works"));
const Contact = lazy(() => import("./../Components/ContactForm/ContactForm"));
const Footer = lazy(() => import("./../Components/Footer/Footer"));

const HomePortfolio: React.FC = () => {
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

  // if (isLoading) {
  //   return (
  //     <div className="preLoader">
  //       <ReactLoading
  //         type={"spinningBubbles"}
  //         color={"#a3dafb"}
  //         height={200}
  //         width={200}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className={`app ${theme}`}>
      <Suspense
        fallback={
          <div className="preLoader">
            <ReactLoading
              type={"spinningBubbles"}
              color={"#a3dafb"}
              height={200}
              width={200}
            />
          </div>
        }
      >
        <Navbar theme={theme}></Navbar>
        <Home theme={theme}></Home>
        {/* Wrap lazy-loaded components with Suspense and define a fallback */}
        <About theme={theme}></About>
        <Reviews theme={theme}></Reviews>
        <Stack theme={theme}></Stack>
        <Works theme={theme}></Works>
        <Contact theme={theme}></Contact>
        <div className="Footer-toggle">
          <label className="switch" htmlFor="themeToggle">
            <input
              type="checkbox"
              id="themeToggle" // Assign an id for the label's 'for' attribute
              onClick={toggleTheme}
              aria-labelledby="themeToggle" // Reference the label's id for screen readers
            />
            <span className="slider round"> </span>
          </label>
        </div>
        <Footer theme={theme}></Footer>
      </Suspense>
    </div>
  );
};

export default HomePortfolio;

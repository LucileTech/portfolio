import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./../pages/Home";
import Stack from "./../Components/Stack/Stack";
import Works from "./../Components/Works/Works";
import Contact from "./../Components/ContactForm/ContactForm";
import About from "./../Components/Aboutme/Aboutme";

const HomePortfolio = ({ theme }: { theme: string }) => {
  return (
    <>
      <Home theme={theme}></Home>
      <Stack></Stack>
      <About></About>
      <Works></Works>
      <Contact></Contact>
    </>
  );
};

export default HomePortfolio;

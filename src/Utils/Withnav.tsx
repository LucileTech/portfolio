import React from "react";
import NavBar from "./../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const Withnav = ({ theme }: { theme: string }) => {
  return (
    <>
      <NavBar theme={theme} />
    </>
  );
};

export default Withnav;

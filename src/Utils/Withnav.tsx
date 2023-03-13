import React from "react";
import NavBar from "./../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const Withnav = ({ theme }: { theme: string }) => {
  return (
    <>
      <NavBar />
    </>
  );
};

export default Withnav;

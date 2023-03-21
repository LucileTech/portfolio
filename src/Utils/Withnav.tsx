import React from "react";
import NavBar from "./../Components/Navbar/Navbar";

const Withnav = ({ theme }: { theme: string }) => {
  return (
    <>
      <NavBar theme={theme} />
    </>
  );
};

export default Withnav;

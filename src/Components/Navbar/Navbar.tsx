import React from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar-entire">
        {/* The logo redirects to homePage */}
        <div className="navbar-left">
          <Link to="/">Home</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;

import React from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer-entire">
      <p className="copyright-footer">
        <div>Copyright © 2023 Lucile Tronczyk. All Rights Reserved.</div>
      </p>
    </div>
  );
};

export default Footer;

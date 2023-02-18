import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import octopus1 from "./../Images/octopus1.png";

const CatGame = () => {
  return (
    <div>
      <h2 className="Section-title">OCTOPUS</h2>
      <p>
        I did the Front End and the Back End of this e-commerce with Amélie
        Chabrand in 2 weeks in décembre 2022.
      </p>
      <p>
        <img className="LT-logo" src={octopus1} alt="logo" />
      </p>
    </div>
  );
};

export default CatGame;

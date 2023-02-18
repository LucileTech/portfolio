import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import postit1 from "./../Images/postit1.png";

const PostIt = () => {
  return (
    <div>
      <h2 className="Section-title">POST IT</h2>
      <p>
        I coded the front and the back of this Web App with Amélie Chabrand in a
        week.
      </p>
      <p>
        <img className="LT-logo" src={postit1} alt="logo" />
      </p>
    </div>
  );
};

export default PostIt;

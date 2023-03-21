import React from "react";
import catgame1 from "./../Images/catgame1.png";

const CatGame = () => {
  return (
    <div>
      <h2 className="Section-title">THE CAT AND THE FANTASTIC FOREST</h2>
      <p>I coded this web browser game alone in 4 days.</p>
      <p>
        <img className="LT-logo" src={catgame1} alt="logo" />
      </p>
    </div>
  );
};

export default CatGame;

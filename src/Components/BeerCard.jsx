import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="card">
      <img src={beer.image} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.style}</p>
    </div>
  );
};

export default BeerCard;

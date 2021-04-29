import React, { Link } from "react-router-dom";

const StarshipItem = ({ info }) => {
  return (
    <>
      <div className="ml-4">
        <Link className="text-decoration-none" to={`/starship/${info.name}`}>
          <h2>{info.name}</h2>
          <ul>
            <li>model: {info.model}</li>
            <li>manufacturer: {info.manufacturer}</li>
            <li>passengers: {info.passengers}</li>
            <li>starship_class: {info.starship_class}</li>
          </ul>
        </Link>
      </div>
    </>
  );
};

export default StarshipItem;

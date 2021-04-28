import React, { Link } from "react-router-dom";

const PlanetItem = ({ info }) => {
  return (
    <>
      <Link to={`/planet/${info.name}`}>
        <h2>{info.name}</h2>
        <ul>
          <li>Orbital_period: {info.orbital_period}</li>
          <li>climate: {info.climate}</li>
          <li>population: {info.population}</li>
        </ul>
      </Link>
    </>
  );
};

export default PlanetItem;

import React, { useParams } from "react-router-dom";
import { GetContext } from "../Context/Context";
import { useContext } from "react";
import { useEffect } from "react";

const PlanetDetail = () => {
  const { info, toggle } = useContext(GetContext);
  const { name } = useParams();
  console.log(name);
  const getPlanet = async (name) => {
    try {
      const RES = await fetch(`https://swapi.dev/api/planets/?search=${name}`);
      const data = await RES.json();
      toggle(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlanet(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const info2 = info[0];
  console.log(info2);

  return (
    <>
      <div className="row-container">
        <h2>{info2.name}</h2>
        <ul>
          <li>Rotation_period: {info2.rotation_period}</li>
          <li>Orbital_period: {info2.orbital_period}</li>
          <li>diameter: {info2.diameter}</li>
          <li>climate: {info2.climate}</li>
          <li>gravity: {info2.gravity}</li>
          <li>population: {info2.population}</li>
        </ul>
      </div>
    </>
  );
};

export default PlanetDetail;

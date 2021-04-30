import React, { useParams } from "react-router-dom";
import { GetContext } from "../Context/Context";
import { useContext } from "react";
import { useEffect } from "react";

const VehicleDetail = () => {
  const { info, toggle } = useContext(GetContext);
  const { name } = useParams();
  console.log(name);
  const getStarship = async (name) => {
    try {
      const RES = await fetch(`https://swapi.dev/api/vehicles/?search=${name}`);
      const data = await RES.json();
      toggle(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStarship(name);
  }, [name]);

  const info2 = info[0];
  console.log(info2);

  return (
    <>
      <div className="row-container">
        <h2>{info2.name}</h2>
        <ul>
          <li>Model: {info2.model}</li>
          <li>Manufacturer: {info2.manufacturer}</li>
          <li>Cost_in_credits: {info2.cost_in_credits}</li>
          <li>Passengers: {info2.passengers}</li>
          <li>cargo-capacity: {info2.cargo_capacity}</li>
          <li>Vehicle_class: {info2.vehicle_class}</li>
          <li>max_atmosphering_speed: {info2.max_atmosphering_speed}</li>
        </ul>
      </div>
    </>
  );
};

export default VehicleDetail;

import React, { Link } from "react-router-dom";

const ShipItem = ({ info }) => {
  return (
    <>
      <Link to={`/ship/${info.name}`}>
        <h2>{info.name}</h2>
        <ul>
          <li>model: {info.model}</li>
          <li>manufacturer: {info.manufacturer}</li>
          <li>passengers: {info.passengers}</li>
          <li>vehicle_class: {info.vehicle_class}</li>
        </ul>
      </Link>
    </>
  );
};

export default ShipItem;

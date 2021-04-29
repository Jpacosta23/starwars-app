import React, { Link } from "react-router-dom";

const VehicleItem = ({ info }) => {
  return (
    <>
      <div className="ml-4">
        <Link className="text-decoration-none" to={`/vehicle/${info.name}`}>
          <h2>{info.name}</h2>
          <ul>
            <li>model: {info.model}</li>
            <li>manufacturer: {info.manufacturer}</li>
            <li>passengers: {info.passengers}</li>
            <li>vehicle_class: {info.vehicle_class}</li>
          </ul>
        </Link>
      </div>
    </>
  );
};

export default VehicleItem;

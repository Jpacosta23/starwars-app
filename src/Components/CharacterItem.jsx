import React, { Link } from "react-router-dom";

const CharacterItem = ({ info }) => {
  return (
    <>
      <Link to={`/character/${info.name}`}>
        <h2>{info.name}</h2>
        <ul>
          <li>Birth year: {info.birth_year}</li>
          <li>gender: {info.gender}</li>
          <li>height: {info.height}</li>
          <li>mass: {info.mass}</li>
        </ul>
      </Link>
    </>
  );
};

export default CharacterItem;

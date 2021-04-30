import React, { useParams } from "react-router-dom";
import { GetContext } from "../Context/Context";
import { useContext } from "react";
import { useEffect } from "react";

const CharacterDetail = () => {
  const { info, toggle } = useContext(GetContext);
  const { name } = useParams();
  console.log(name);
  const getCharacter = async (name) => {
    try {
      const RES = await fetch(`https://swapi.dev/api/people/?search=${name}`);
      const data = await RES.json();
      toggle(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacter(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const info2 = info[0];

  return (
    <>
      <div className="row-container">
        <h2>{info2.name}</h2>
        <ul>
          <li>Birth year: {info2.birth_year}</li>
          <li>gender: {info2.gender}</li>
          <li>height: {info2.height}</li>
          <li>mass: {info2.mass}</li>
          <li>skin_color: {info2.skin_color}</li>
          <li>eye_color: {info2.eye_color}</li>
        </ul>
      </div>
    </>
  );
};

export default CharacterDetail;

import React, { useEffect } from "react";
import { useContext } from "react";
import CharacterItem from "../Components/CharacterItem";
import Paginator from "../Components/Paginator";
import { GetContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const Characters = () => {
  const { toggle, info, setPage, page } = useContext(GetContext);
  const { pag } = useParams();
  setPage(parseInt(pag));

  const getInfo = async (page) => {
    try {
      const URL = `https://swapi.dev/api/people/?page=${page}`;
      const RES = await fetch(URL);
      const data = await RES.json();
      toggle(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(info);
  useEffect(() => {
    getInfo(page);
  }, [page]);

  return (
    <>
      <h1>Characters page</h1>
      <p>characters:</p>
      <ul>
        {!info.length
          ? "cargando"
          : info.map((character) => <CharacterItem info={character} />)}
      </ul>
      <Paginator />
    </>
  );
};

export default Characters;

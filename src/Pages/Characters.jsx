import React, { useEffect } from "react";
import { useContext } from "react";
import CharacterItem from "../Components/CharacterItem";
import Paginator from "../Components/Paginator";
import { GetContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const Characters = () => {
  const { toggle, info, setPage, page, setCurrent, setParam } = useContext(
    GetContext
  );
  const { pag } = useParams();
  setPage(parseInt(pag));
  setParam("characters");

  const getInfo = async (page) => {
    try {
      const URL = `https://swapi.dev/api/people/?page=${page}`;
      const RES = await fetch(URL);
      const data = await RES.json();
      toggle(data.results);
      setCurrent(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getInfo(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

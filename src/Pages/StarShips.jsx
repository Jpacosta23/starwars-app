import React, { useEffect } from "react";
import { useContext } from "react";
import StarshipItem from "../Components/StarshipItem";
import Paginator from "../Components/Paginator";
import { GetContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const StarShips = () => {
  const { toggle, info, setPage, page, setCurrent, setParam } = useContext(
    GetContext
  );
  const { pag } = useParams();
  setPage(parseInt(pag));
  setParam("starships");

  const getInfo = async (page) => {
    try {
      if (page > 4) {
        setPage(1);
      } else {
        const URL = `https://swapi.dev/api/starships/?page=${page}`;
        const RES = await fetch(URL);
        const data = await RES.json();
        toggle(data.results);
        setCurrent(data);
      }
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
      <h1>Starships page</h1>
      <p>Starships:</p>
      <ul>
        {!info.length
          ? "loading..."
          : info.map((vehicle) => <StarshipItem info={vehicle} />)}
      </ul>
      <Paginator />
    </>
  );
};

export default StarShips;

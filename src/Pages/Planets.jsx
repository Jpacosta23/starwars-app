import React, { useEffect } from "react";
import { useContext } from "react";
import PlanetItem from "../Components/PlanetItem";
import Paginator from "../Components/Paginator";
import { GetContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const Planets = () => {
  const { toggle, info, setPage, page, setCurrent, setParam } = useContext(
    GetContext
  );
  const { pag } = useParams();
  setPage(parseInt(pag));
  setParam("planets");

  const getInfo = async (page) => {
    try {
      if (page > 6) {
        setPage(1);
      } else {
        const URL = `https://swapi.dev/api/planets/?page=${page}`;
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
      <h1>Planet page</h1>
      <p>Planets:</p>
      <ul>
        {!info.length
          ? "loading..."
          : info.map((planet) => <PlanetItem info={planet} />)}
      </ul>
      <Paginator />
    </>
  );
};

export default Planets;

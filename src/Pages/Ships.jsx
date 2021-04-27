import React, { useEffect } from "react";
import { useContext } from "react";
import ShipItem from "../Components/ShipItem";
import Paginator from "../Components/Paginator";
import { GetContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const Ships = () => {
  const {
    toggleShips,
    infoShips,
    setPage,
    page,
    setCurrent,
    setParam,
  } = useContext(GetContext);
  const { pag } = useParams();
  setPage(parseInt(pag));
  setParam("ships");

  const getInfo = async (page) => {
    try {
      const URL = `https://swapi.dev/api/vehicles/?page=${page}`;
      const RES = await fetch(URL);
      const data = await RES.json();
      toggleShips(data.results);
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
      <h1>Vehicles page</h1>
      <p>Vehicles:</p>
      <ul>
        {!infoShips.length
          ? "cargando"
          : infoShips.map((vehicle) => <ShipItem info={vehicle} />)}
      </ul>
      <Paginator />
    </>
  );
};

export default Ships;

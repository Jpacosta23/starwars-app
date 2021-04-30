import React, { useEffect } from "react";
import { useContext } from "react";
import VehicleItem from "../Components/VehicleItem";
import Paginator from "../Components/Paginator";
import { GetContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const Vehicles = () => {
  const { toggle, info, setPage, page, setCurrent, setParam } = useContext(
    GetContext
  );
  const { pag } = useParams();
  setPage(parseInt(pag));
  setParam("vehicles");

  const getInfo = async (page) => {
    try {
      if (page > 4) {
        setPage(1);
      } else {
        const URL = `https://swapi.dev/api/vehicles/?page=${page}`;
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
  console.log(info);
  return (
    <>
      <h1>Vehicles page</h1>
      <p>Vehicles:</p>
      <div className="container-fluid">
        {!info.length
          ? "loading..."
          : info.map((vehicle) => <VehicleItem info={vehicle} />)}
      </div>
      <Paginator />
    </>
  );
};

export default Vehicles;

import { createContext, useState } from "react";

const initialState = {
  info: {},
  toggle: () => {},
  infoShips: {},
  toggleShips: () => {},
};

export const GetContext = createContext(initialState);

export const InfoProvider = (props) => {
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [infoShips, setInfoShips] = useState({});
  const [infoPlanets, setInfoPlanets] = useState({});
  const [current, setCurrent] = useState("");
  const [param, setParam] = useState("");

  const { children } = props;

  const toggle = (data) => {
    setInfo(data);
  };
  const toggleShips = (data) => {
    setInfoShips(data);
  };
  const togglePlanets = (data) => {
    setInfoPlanets(data);
  };

  const context = {
    info,
    toggle,
    page,
    setPage,
    current,
    setCurrent,
    infoShips,
    toggleShips,
    param,
    setParam,
    infoPlanets,
    togglePlanets,
  };

  return <GetContext.Provider value={context}>{children}</GetContext.Provider>;
};

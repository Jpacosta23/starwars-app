import { createContext, useState } from "react";

const initialState = {
  info: {},
  toggle: () => {},
};

export const GetContext = createContext(initialState);

export const InfoProvider = (props) => {
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  const { children } = props;

  const toggle = (data) => {
    setInfo(data);
  };

  const context = {
    info,
    toggle,
    page,
    setPage,
  };

  return <GetContext.Provider value={context}>{children}</GetContext.Provider>;
};

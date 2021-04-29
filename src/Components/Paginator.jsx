import React from "react";
import { GetContext } from "../Context/Context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Paginator = () => {
  const { page, setPage, current, param, info } = useContext(GetContext);
  let history = useHistory();

  const prevHandlerEvent = (event) => {
    event.preventDefault();
    let page2;
    if (current.previous === null) {
      page2 = 1;
    } else {
      page2 = page - 1;
    }
    setPage(page2);
    history.push(`/${param}/${page2}`);
  };
  const nextHandlerEvent = (event) => {
    event.preventDefault();
    let page2;
    if (current.next === null) {
      page2 = page;
    } else {
      page2 = page + 1;
    }
    setPage(page2);
    history.push(`/${param}/${page2}`);
  };
  return (
    <div className={`${info.length < 2 ? "d-none" : null}`}>
      <button onClick={prevHandlerEvent}>Prev</button>

      <button onClick={nextHandlerEvent}>Next</button>
    </div>
  );
};

export default Paginator;

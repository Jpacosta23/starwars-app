import React, { useState } from "react";
import { GetContext } from "../Context/Context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Paginator = () => {
  const { page, setPage } = useContext(GetContext);
  let history = useHistory();

  const prevHandlerEvent = (event) => {
    event.preventDefault();
    let page2;
    if (page <= 1) {
      page2 = 1;
    } else {
      page2 = page - 1;
    }
    setPage(page2);
    history.push(`/characters/${page2}`);
  };
  const nextHandlerEvent = (event) => {
    event.preventDefault();
    let page2;
    if (page >= 9) {
      page2 = 9;
    } else {
      page2 = page + 1;
    }
    setPage(page2);
    history.push(`/characters/${page2}`);
  };
  return (
    <>
      <button onClick={prevHandlerEvent}>Prev</button>

      <button onClick={nextHandlerEvent}>Next</button>
    </>
  );
};

export default Paginator;

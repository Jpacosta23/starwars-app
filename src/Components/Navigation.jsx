import React, { Link } from "react-router-dom";
import { GetContext } from "../Context/Context";
import { useContext } from "react";

const Navigation = () => {
  const { page } = useContext(GetContext);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={`/characters/${page}`}>Characters</Link>
      </li>
      <li>
        <Link to="/planets">Planets</Link>
      </li>
      <li>
        <Link to="/ships">Ships</Link>
      </li>
    </ul>
  );
};

export default Navigation;

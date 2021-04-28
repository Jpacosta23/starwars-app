import React, { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={`/characters/1`}>Characters</Link>
      </li>
      <li>
        <Link to="/planets/1">Planets</Link>
      </li>
      <li>
        <Link to="/ships/1">Ships</Link>
      </li>
    </ul>
  );
};

export default Navigation;

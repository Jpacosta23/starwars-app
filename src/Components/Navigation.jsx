import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { GetContext } from "../Context/Context";
import { useContext } from "react";

const Navigation = () => {
  const { info, toggle, param, page } = useContext(GetContext);
  const infoEl = React.useRef(null);
  const getFiltered = async () => {
    try {
      if (infoEl.current.value.length === 0) {
        const URL = `https://swapi.dev/api/${param}/?page=${page}`;
        const RES = await fetch(URL);
        const data = await RES.json();
        toggle(data.results);
      } else {
        const RES = await fetch(
          `https://swapi.dev/api/${param}/?search=${infoEl.current.value}`
        );
        const data = await RES.json();
        toggle(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    getFiltered();
    console.log(info);
  };

  return (
    <>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            STARWARS
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={`/people/1`}>
              Characters
            </Nav.Link>
            <Nav.Link as={Link} to="/planets/1">
              Planets
            </Nav.Link>
            <Nav.Link as={Link} to="/vehicles/1">
              Vehicles
            </Nav.Link>
            <Nav.Link as={Link} to="/starships/1">
              Starships
            </Nav.Link>
          </Nav>
          <Form inline onSubmit={handlerSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              ref={infoEl}
            />
            <Button variant="outline-info" type="submit">
              Search
            </Button>
          </Form>
        </Navbar>
      </>
    </>
  );
};

export default Navigation;

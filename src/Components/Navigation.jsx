import React, { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Navigation = () => {
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
            <Nav.Link as={Link} to={`/characters/1`}>
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    </>
  );
};

export default Navigation;

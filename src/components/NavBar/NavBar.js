import React, { useState } from "react";
import IMGS from "../../assests/Utils/Img";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { LogUserBtn } from "../LogUserBtn/LogUserBtn";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleEnter = (e) => {
    if (e.Key === "Enter") e.preventDefault();
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilter = () => {
    if (search !== '')
      navigate(`/search/${search}`);
  };

  return (
    <Navbar className="navSae" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            className="imgLogo"
            src={IMGS.imgLogo.img}
            alt={IMGS.imgLogo.name}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/sae">SAE</Nav.Link>
            <Nav.Link href="/info">Informacion</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/items">Insumos Riego</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service">Servicios SAE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Container className="ContenedorTitulo">
            <h1 className="insetshadow">- SAE - StoRe</h1>
          </Container>
          <CartWidget />
          <Form className="d-flex">
            <Form.Control
              type="search"
              value={search}
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
              onChange={handleSearch}
              onKeyPress={handleEnter}
            />
            <Button variant="success" onClick={handleFilter}>
              Buscar
            </Button>
          </Form>
          <LogUserBtn />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

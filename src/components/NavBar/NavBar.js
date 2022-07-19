import * as React from "react";
import IMGS from "../../assests/Utils/Img"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LogUserBtn } from "../LogUserBtn/LogUserBtn";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css';





export function NavBar() {
  return (
    <Navbar className="navSae"  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="imgLogo" src={IMGS.imgLogo.img} alt={IMGS.imgLogo.name} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1">SAE</Nav.Link>
            <Nav.Link href="#action2">Informacion</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Insumos Riego</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Servicios SAE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Container className="ContenedorTitulo">
            <h1 class='insetshadow'>SAE - StoRe</h1>
          </Container>
          <CartWidget/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
            />
            <Button variant="success">Buscar</Button>

          </Form>
          <LogUserBtn/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

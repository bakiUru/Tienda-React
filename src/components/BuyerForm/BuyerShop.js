import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import { useNavigate } from "react-router-dom";
import { LogUserBtn } from "../LogUserBtn/LogUserBtn";
import "./BuyerShop.css";

function FormClient() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          No estas Logeado... Ingresa los datos para Terminar la Compra
        </Form.Text>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirm Email</Form.Label>
        <Form.Control type="email2" placeholder="Re-Email..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recibir Ofertas" />
      </Form.Group>
      <ClickLogin />
    </Form>
  );
}

function BuyerForm({ show, onHide }) {
const navigate = useNavigate();
  return (
    <>
      <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <FormClient />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar Compra
          </Button>
          <Button variant="warning" type="submit" onClick={()=>navigate(`/compraDetalles/`)}>
            Enviar Compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ClickLogin() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="logInBtn"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Log in to Sing UP
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <LogUserBtn></LogUserBtn>
        </div>
      </Collapse>
    </>
  );
}

export function BuyerShop() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        className="finishBtn"
        variant="success"
        onClick={() => setModalShow(true)}
      >
        Terminar Compra
      </Button>

      <BuyerForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></BuyerForm>
    </>
  );
}

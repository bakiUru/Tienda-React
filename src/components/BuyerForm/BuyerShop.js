import Form from "react-bootstrap/Form";
import React, { useState, useContext } from "react";
import { Container, ModalTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import { useNavigate } from "react-router-dom";
import { LogUserBtn } from "../LogUserBtn/LogUserBtn";
import { CartContext } from "../../Context/CartContext";
import "./BuyerShop.css";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import Swal from "sweetalert2";

function FormClient() {
  const { cart, totalAmount, cleanCart } = useContext(CartContext);
  const [cartNow, setCartNow] = useState(cart);
  const [validated, setValidated] = useState(false);
  const [buyer, setBuyer] = useState({});
  const [orderID, setOrderID] = useState();
  const navigate = useNavigate();

  //Envio de Datos a Firebase
  async function sendShop(e) {
    e.preventDefault();
    const db = getFirestore();

    const sellCollection = collection(db, "Sells");

    await addDoc(sellCollection, {
      buyer,
      sell: cartNow,
      total: totalAmount(cartNow),
      date: serverTimestamp(),
    })
      .then((res) => {
        console.log(res.id);
        console.log(sellCollection);
        setOrderID(res.id);
        Swal.fire({
          title: `${buyer.name} <br> Su pedido Fue Enviado `,
          html:
            '<iframe src="https://embed.lottiefiles.com/animation/91068"></iframe>' +
            `<h4>Orden Numero: ${res.id}</h4>`,
          imageAlt: "Success",
        });

        navigate(`/CheckOut/${res.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleInput = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };



  const handleSubmit = (event) => {
    const form = event.currentTarget;

    //Control de mail
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //Css de error
    setValidated(true);
 
    //Si todo esta Ok Enviamos la Compra
    if (form.checkValidity() === true) {

      //Desactivo el boton para evitar muchos envios
      document.getElementById("btnSendShop").setAttribute("disabled", true);
      document.getElementById("btnSendShop").innerHTML = "Enviando...";
      sendShop(event);
      setTimeout(() => {
        cleanCart();
      }, 2000);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Text className="text-muted">
          No estas Logeado... Ingresa los datos para Terminar la Compra
        </Form.Text>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          name="name"
          required
          type="text"
          placeholder="Nombre..."
          onChange={handleInput}
        />
        <Form.Control.Feedback></Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Ingrese Un Nombre
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="mb-3"
  
      >
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          required
          type="email"
          placeholder="Email..."
          onChange={handleInput}
        />
        <Form.Control.Feedback></Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Ingrese Email
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="mb-3"
      
      >
        <Form.Label>Confirm Email</Form.Label>
        <Form.Control 
        required  pattern={buyer.email}
        id="reEmail" 
        type="email"  
        placeholder="Re-Email..."
        />
        <Form.Control.Feedback type="invalid">
          Deben Coincidir los Email
        </Form.Control.Feedback>
        <Form.Control.Feedback></Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          name="phone"
          required
          type="text"
          placeholder="Phone"
          onChange={handleInput}
        />
        <Form.Control.Feedback></Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Recibir Ofertas" />
      </Form.Group>
      <Container className="sendCtn">
        <Button variant="warning" type="submit" id="btnSendShop">
          Enviar Compra
        </Button>
      </Container>
    </Form>
  );
}

function BuyerForm({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Footer>
          <Modal.Body>
            <FormClient />
          </Modal.Body>
          <Container className="logInCtn">
            <ClickLogin />
          </Container>
        </Modal.Footer>

        <Modal.Footer>
          <Container>
            <Button
              className="cancelBtn"
              variant="outline-danger"
              size="sm"
              onClick={onHide}
            >
              Cancelar Compra
            </Button>
          </Container>
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

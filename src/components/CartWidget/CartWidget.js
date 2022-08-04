import React, {useState,useEffect} from "react";
import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";

export function CartWidget() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        
    }, [show]);

  return (
    <div>
      <Button className="cartBtn" variant="outline-light" onClick={handleShow}>
        <AiOutlineShoppingCart className="cartIcon" />
        <Badge pill bg="warning" text="dark">
          0
        </Badge>
      </Button>
        <Offcanvas show={show} placement='end' onHide={handleClose} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           Lista de los Productos agregados al Carrito
           <Button className="pay btn btn-primary" variant="outline-light" onHide={handleClose} > <NavLink className='payLink' to='/cart'>PAGAR</NavLink></Button>
          </Offcanvas.Body>
        </Offcanvas>
    
    </div>
  );
}

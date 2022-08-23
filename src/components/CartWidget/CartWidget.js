import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export function CartWidget() {
  const { cantItemInCart, cart} = useContext(CartContext);

  const [show, setShow] = useState(false);
  const [cartNow, setCartNow] = useState(cart);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    //Desactivo btn de suma al limite de STOCK
  }, [cantItemInCart]);

  return (
    <div>
      <Button className="cartBtn" variant="outline-light" onClick={handleShow}>
        <AiOutlineShoppingCart className="cartIcon" />
        <Badge pill bg="warning" text="dark">
          {cantItemInCart}
        </Badge>
      </Button>
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>Lista de los Productos</h5>
          {cantItemInCart == 0 ? (
            <div>
              <span>
                <br></br>
               <h6>No hay Items en El carro</h6>
              </span>
              <br></br>
              <br></br>
              <NavLink to="/items"  className="btn btn-primarygoShop ">
                  Ir de Compras
               </NavLink>
            </div>
          ) : (
            <div>
              <br></br>
              <span>Tus Articulos:</span>
              <br></br>
              {console.log(cartNow)}
              {cartNow.map(item =>{
                return (<span>{item.nameTitle}</span>)
              })}
              <br></br>
            <NavLink className="payLink" to="/cart">
              PAGAR
            </NavLink>
            </div>
          )}

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

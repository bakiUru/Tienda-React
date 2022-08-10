import React, {useState,useEffect,useContext} from "react";
import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export function CartWidget() {

    const {cantItemInCart} =  useContext(CartContext);;
  
    const [show, setShow] = useState(false);

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
        <Offcanvas show={show} placement='end' onHide={handleClose} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           Lista de los Productos
           {cantItemInCart == 0? 
           <div>

             <span>
             <br></br>
             No hay Items en El carro</span> 
             <br></br>
             <br></br>
           </div>
           : 
           <div>

             <br></br>
             <span>Tus Articulos:</span>
             <br></br>
             <br></br>
           </div>
           }
           <Button className="pay btn btn-primary" variant="outline-light" onHide={handleClose} > <NavLink className='payLink' to='/cart'>PAGAR</NavLink></Button>
          </Offcanvas.Body>
        </Offcanvas>
    
    </div>
  );
}

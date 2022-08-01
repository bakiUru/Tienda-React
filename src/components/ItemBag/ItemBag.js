import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/esm/Badge";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { BsBagFill } from "react-icons/bs";
import "./ItemBag.css";

//Ultima Actualizacion, diferenciacion de componentes para cada producto añadiendo
//id del item al id del componente

export function ItemBag({ onAdd, init, id, stock, updateStock }) {
  //HOOKS
  const [stockItem, setStockItem] = useState(stock);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [count, setCount] = useState(init);

  console.log("Stock recibido", stock);
  console.log("Stock seteado", stockItem);
  console.log(typeof stock);
  useEffect(() => {
    //Desactivo butn de resta y Agregar Carrito
    if (count === 0) {
      document
        .getElementById("bagBtnAddCart" + id)
        .toggleAttribute("disabled", true);
      document.getElementById("remBtn" + id).toggleAttribute("disabled", true);
    } else {
      document.getElementById("remBtn" + id).toggleAttribute("disabled", false);
      document
        .getElementById("bagBtnAddCart" + id)
        .toggleAttribute("disabled", false);
    }

    //Desactivo btn de suma al limite de STOCK
    if (count === stockItem)
      document.getElementById("addBtn" + id).toggleAttribute("disabled", true);
    else
      document.getElementById("addBtn" + id).toggleAttribute("disabled", false);
  }, [count]);

  //Limpio el Efecto del tooltip
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [show]);

  //Agrega a la Bolsa un item
  const addBag = () => {
    if (count < stockItem) setCount(count + 1);
    else console.log("NO Hay Stock");
  };
  //quita de la Bolsa un item
  const remBag = () => {
    setCount(count - 1);
    if (count === 0) setCount(0);
  };
  //Limpia la Bolsa
  const delBag = () => {
    if (count !== 0) {
      setCount(0);
      setShow(!show);
    }
  };
  //envia al carro
  const sendBag = () => {
    setCount(0);
    setStockItem(stockItem - count);
    console.log(stockItem);
    onAdd(count);
  };

  //Actualizo Stock
  useEffect(() => {
    updateStock(stockItem);
  }, [stockItem]);

  return (
    <Container className="contBtn" ref={target}>
      <Button
        id={"addBtn" + id}
        variant="primary"
        className="bagBtn"
        onClick={addBag}
      >
        +
      </Button>
      <Button className="bagBtn" variant="outline-light" onClick={delBag}>
        <BsBagFill className="cartIcon" />
        <Badge pill bg="warning" text="dark">
          {count}
        </Badge>
      </Button>
      <Button
        id={"remBtn" + id}
        variant="primary"
        className="bagBtn"
        onClick={remBag}
      >
        -
      </Button>

      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            ¡Bolsa Vaciada!
          </Tooltip>
        )}
      </Overlay>

      <Button
        id={"bagBtnAddCart" + id}
        variant="primary"
        className="bagBtnAddCart"
        onClick={sendBag}
      >
        Agregar al Carrito
      </Button>
    </Container>
  );
}

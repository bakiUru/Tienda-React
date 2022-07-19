import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/esm/Badge";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsBagFill } from "react-icons/bs";
import "./ItemBag.css";

let stock = 20;

export function ItemBag() {
    const [show, setShow] = React.useState(false);
    const target = React.useRef(null);
    const [count, setCount] = React.useState(0);

  const addBag = () => {
    if (count < stock)
        setCount(count + 1);
    else{

        console.log("NO Hay Stock")
    }
        
  };

  const remBag = () => {
    setCount(count - 1);
    if (count === 0)
        setCount(0);
  };

  const delBag = ()=>{
    if (count !== 0){
        setCount(0);
        setShow(!show);    
    }
  }
  return (
    
    <Container className="contBtn" ref={target}>
      <Button variant="primary" className="bagBtn" onClick={addBag}>
        Agregar
      </Button>
      <Button variant="primary" className="bagBtn" onClick={remBag}>
        Quitar
      </Button>

      <Button className="bagBtn" variant="outline-light"  onClick={delBag}>
        <BsBagFill className="cartIcon" />
        <Badge pill bg="warning" text="dark">
          {count}
        </Badge>
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            ¡Vacía!
          </Tooltip>
                  )}
                  </Overlay>
    </Container>
  );
}

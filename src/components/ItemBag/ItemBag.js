import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/esm/Badge";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsBagFill } from "react-icons/bs";
import "./ItemBag.css";



export function ItemBag(props) {
  //HOOKS
    const [show, setShow] = React.useState(false);
    const target = React.useRef(null);
    const [count, setCount] = React.useState(props.init);


  React.useEffect(()=>{

    //Desactivo butn de resta y Agregar Carrito
    if(count===0)
    {
      
      document.getElementById('bagBtnAddCart').toggleAttribute('disabled',true);
      document.getElementById('remBtn').toggleAttribute('disabled',true);
    }
      
    else
    {
      document.getElementById('remBtn').toggleAttribute('disabled',false);
      document.getElementById('bagBtnAddCart').toggleAttribute('disabled',false);
    }
      
    //Desactivo butn de suma al limite de STOCK
    if(count===props.stock)
      document.getElementById('addBtn').toggleAttribute('disabled',true);
    else
      document.getElementById('addBtn').toggleAttribute('disabled',false);

  },[count]);

  //Agrega a la Bolsa un item
  const addBag = () => {
    if (count < props.stock)
      setCount(count + 1);
      
  
    else
        console.log("NO Hay Stock")
        
  };
 //quita de la Bolsa un item
  const remBag = () => {
    setCount(count - 1);
    if (count === 0)
      setCount(0);
    
        

  };
//Limpia la Bolsa
  const delBag = ()=>{
    if (count !== 0){
        setCount(0);
        setShow(!show);    
    }
  }
//envia al carro
  const sendBag = ()=>{
        setCount(0);
        console.log("Enviado al Carro!!!");   
    }
  
  return (
    
    <Container className="contBtn" ref={target}>
      <Button id='addBtn'variant="primary" className="bagBtn" onClick={addBag}>
        +
      </Button>
      <Button className="bagBtn" variant="outline-light"  onClick={delBag}>
        <BsBagFill    className="cartIcon" />
        <Badge pill bg="warning" text="dark">
          {count}
        </Badge>
      </Button>
      <Button id='remBtn' variant="primary" className="bagBtn" onClick={remBag}>
        -
      </Button>

      
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            ¡Vacía!
          </Tooltip>
                  )}
       </Overlay>

       <Button id='bagBtnAddCart' variant="primary" className="bagBtnAddCart" onClick={sendBag}>
        Agregar al Carrito
      </Button>
    </Container>
  );
}

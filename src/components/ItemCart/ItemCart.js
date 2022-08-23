import React, {useContext,useState,useEffect} from "react";
import  {Table}  from "react-bootstrap";
import { Figure } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { TbZoomQuestion } from "react-icons/tb";
import './ItemCart.css'

const srverImg = "https://saeriego.tech/";

function FigureItem({img,name,delItemCart,id}) {
const navigate = useNavigate();
    return (
      <Figure>
        <Figure.Image
          width={120}
          height={130}
          alt="120x130"
          src={srverImg+img}
        />{' '}
         <Button variant='danger'onClick={()=>delItemCart(id)}>X</Button>{'  '}
         <Button variant="outline-secondary" onClick={()=>navigate(`/detalles/${id}`)}><TbZoomQuestion /></Button>
       <Figure.Caption>
       {name}
     </Figure.Caption>
     </Figure>
    );
  }



export function ItemCart({id,nameItem,img,price, quantity}){
  const {delItemCart} = useContext(CartContext);

    return(
        <Table striped bordered hover className="tableCart">
            <tr>
            <td className="itemRow"><FigureItem img={img} name={nameItem} id={id} delItemCart={delItemCart}/></td>
            <td className='unitItem'>{quantity}</td>
            <td className='tot'>$ {price}</td>
          </tr>
        
        </Table>
    );
}

import React from 'react';
import Card from "react-bootstrap/Card";
import { ItemBag } from "../ItemBag/ItemBag";
import { DetailItem } from '../DetailItem/DetailItem';
import IMGS from "../../assests/Utils/Img";
import './Item.css'



export function Item({id, nameTitle,description,price,stock,imgSrc}) {
  const onAdd = (count) =>{
    console.log(`Se Enviaron ${count} Al Carro`);
    return count;
  }
  return (
  
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={IMGS.imgHunter.img[0]} alt={IMGS.imgHunter.name} />
        <Card.Body>
        {  console.log()}
          <Card.Title>{nameTitle}</Card.Title>
          <hr></hr>
            <DetailItem nameTitle={nameTitle} description={description}></DetailItem>
          <hr></hr>
         <ItemBag stock={stock} id={id} init={1} onAdd={onAdd}/>
         <hr></hr>
         <p><span>Precio: {price}</span></p>
         <p><span>Stock: {stock}</span></p>
        </Card.Body>
      </Card>
  
  );
}

import React, {useEffect,useState} from 'react';
import Card from "react-bootstrap/Card";
import { ItemBag } from "../ItemBag/ItemBag";
import { DetailItem } from '../DetailItem/DetailItem';
import IMGS from "../../assests/Utils/Img";
import './Item.css'
const path = require('path');

const srverImg = "https://saeriego.tech/";


export function Item({id, nameTitle,description,price,stock,imgSrc,countCart}) {

      //Actualizo Stock
      const [stockItem, setStockItem] = useState(stock);
  
  const updateStock =(upStock)=>{
    setStockItem(upStock);
  }

  const onAdd = (count) =>{
    console.log(`Se Enviaron ${count} Al Carro`);
    return count;
  }

  useEffect(()=>{

  },[stockItem])
  return (
  
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={srverImg+imgSrc} alt={IMGS.imgHunter.name} />
        <Card.Body>
        {  console.log()}
          <Card.Title>{nameTitle}</Card.Title>
          <hr></hr>
          <hr></hr>
            <DetailItem id={id} nameTitle={nameTitle} description={description} ></DetailItem>
          <hr></hr>
          <ItemBag stock={stock} id={id} init={1} onAdd={onAdd} updateStock={updateStock}/>
         <hr></hr>
         <p><span>Precio: {price}</span></p>
         <p><span>Stock: {stockItem}</span></p>
        </Card.Body>
      </Card>
  
  );
}

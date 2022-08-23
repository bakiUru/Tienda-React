import React, {useEffect,useState} from 'react';
import Card from "react-bootstrap/Card";
import { DetailItem } from '../DetailItem/DetailItem';
import IMGS from "../../assests/Utils/Img";
import './Item.css'


const srverImg = "https://saeriego.tech/";


export function Item({id, nameTitle,description,price,imgSrc, gotoItem}) {


  return (
  
      <Card style={{ width: "18rem" , overflow:"hidden"}}>
        <Card.Img className='imgItem' variant="top" src={srverImg+imgSrc} alt={IMGS.imgHunter.name} onClick={gotoItem}/>
        <Card.Body>
          <Card.Title>{nameTitle}</Card.Title>   
        <hr></hr>
          <DetailItem id={id} nameTitle={nameTitle} description={description} ></DetailItem>
         <hr></hr>
         <p><span>Precio: $ {price}</span></p>
        </Card.Body>
      </Card>
  
  );
}

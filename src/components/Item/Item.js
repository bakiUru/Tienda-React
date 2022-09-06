import React from 'react';
import Card from "react-bootstrap/Card";
import { DetailItem } from '../DetailItem/DetailItem';
import { LazyLoadComponent  } from 'react-lazy-load-image-component';
import './Item.css'


const srverImg = "https://saeriego.tech/";


export function Item({id, nameTitle,description,price,imgSrc, gotoitem}) {


  return (
  
    <Card style={{ width: "18rem" , overflow:"hidden"}}>
        <LazyLoadComponent delayMethod>
        <Card.Img className='imgItem' variant="top" src={srverImg+imgSrc} alt={nameTitle} onClick={gotoitem}/>
        </LazyLoadComponent>
        <Card.Body>
          <Card.Title>{nameTitle}</Card.Title>   
        <hr></hr>
          <DetailItem id={id} nametitle={nameTitle} description={description} ></DetailItem>
         <hr></hr>
         <p><span>Precio: $ {price}</span></p>
        </Card.Body>
      </Card>
  
  );
}

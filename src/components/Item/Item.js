import React, {useEffect,useState} from 'react';
import Card from "react-bootstrap/Card";
import { DetailItem } from '../DetailItem/DetailItem';
import IMGS from "../../assests/Utils/Img";
import './Item.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MyAlert = withReactContent(Swal);
const showSwan = (count) =>{
  
  MyAlert.fire(  'Se enviaron',
  <p>$count</p>+' Al carro',
  'success')
}

const srverImg = "https://saeriego.tech/";


export function Item({id, nameTitle,description,price,imgSrc}) {


  return (
  
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={srverImg+imgSrc} alt={IMGS.imgHunter.name} />
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

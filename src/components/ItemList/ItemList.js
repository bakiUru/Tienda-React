import * as React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { ItemBag } from "../ItemBag/ItemBag";
import IMGS from "../../assests/Utils/Img";



export function ItemList() {
  const onAdd = (count) =>{
    console.log(`Se Enviaron ${count} Al Carro`);
    return count;
  }
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={IMGS.imgHunter.img[0]} alt={IMGS.imgHunter.name} />
        <Card.Body>
          
          <Card.Title>{IMGS.imgHunter.title}</Card.Title>
          <hr></hr>
          <Card.Text>{IMGS.imgHunter.description}</Card.Text>
          <hr></hr>
         <ItemBag stock={10} init={1} onAdd={onAdd}/>
        </Card.Body>
      </Card>
    </Container>
  );
}

import * as React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { ItemBag } from "../ItemBag/ItemBag";
import IMGS from "../../assests/Utils/Img";


export function ItemList(props) {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={IMGS.imgHunter.img[0]} alt={IMGS.imgHunter.name} />
        <Card.Body>
          <Card.Title>{IMGS.imgHunter.title}</Card.Title>
          <Card.Text>{IMGS.imgHunter.description}</Card.Text>
         <ItemBag/>
        </Card.Body>
      </Card>
    </Container>
  );
}

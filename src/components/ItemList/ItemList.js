import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import { Item } from "../Item/Item"
import './ItemList.css'




export function ItemList({ItemTitle}) {

  return (
    <Container>
      
      <h3>{ItemTitle}</h3>
      <Item/>
    </Container>
  );
}

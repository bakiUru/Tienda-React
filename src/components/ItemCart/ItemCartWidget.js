import React from "react";
import { Table } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import "./ItemCart.css";

const srverImg = "https://saeriego.tech/";

function FigureItem({ img, name }) {
  return (
    <Figure>
      <Figure.Image
        width={120}
        height={130}
        alt="120x130"
        src={srverImg + img}
      />{" "}
      <Figure.Caption>{name}</Figure.Caption>
    </Figure>
  );
}

export function ItemCartWidget({ id, nameItem, img, price, quantity }) {
  return (
    <Table striped bordered hover className="tableCart">
      <tr>
        <td className="itemRow">
          <FigureItem img={img} name={nameItem} id={id} />
        </td>
        <td>$</td>
        <td className="tot">{price}</td>
      </tr>
    </Table>
  );
}

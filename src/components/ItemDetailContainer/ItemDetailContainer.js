import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ItemBag } from "../ItemBag/ItemBag";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ItemDetailContainer.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const URLproducts = "https://saeriego.tech/itemsData.json";
const srverImg = "https://saeriego.tech/";

export function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemId } = useParams();
  //Actualizo Stock
  const [stockItem, setStockItem] = useState(itemDetail.stock);
  //Actualizo Price
  const [itemPrice, setItemPrice] = useState(itemDetail.price);
  const [cantCart, setCantCart] = useState(0);

  console.log(typeof itemId);
  const getIdItem = (itemId) => {
    fetch(URLproducts)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItemDetail(json.find((item) => item.id === parseInt(itemId)));
      })
      .catch((rej) => {
        return <h1>NO ENCONTRAMOS EL PRODUCTO</h1>;
      });
  };

  useEffect(() => {
    getIdItem(itemId);

    setStockItem(itemDetail.stock);
  }, [itemId]);

  const updateStock = (upStock) => {
    setStockItem(upStock);
  };

  //actualizo precio
  const updatePrice = () => {
    let cont = onAdd();
    setItemPrice(itemDetail.price * cont);

  };

  const onAdd = (count) => {
    console.log(`Se Enviaron ${count} Al Carro`);
    setCantCart(count);
    return count;
  };


  
  useEffect(() => {}, [stockItem]);

  useEffect(() => {
    updatePrice();
  }, [itemPrice]);

  //funcion Select Cantidades
  const buildSelect = () => {};

  return (
    <>
      <Card>
        <Container>
          <Row>
            <Col>
              <Card.Header>{itemDetail.nameTitle} </Card.Header>
              <Card.Body>
                <Card.Text>{itemDetail.imgDsc}</Card.Text>
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src={srverImg + itemDetail.imgSrc} />
                  <Card.Body>
                    <Card.Title>Producto Detallado</Card.Title>
                    <Card.Text>{itemDetail.description}</Card.Text>
                  </Card.Body>
                  <Card.Header>Aplicaciones</Card.Header>
                  <ListGroup bg="dark" variant="flush">
                    <ListGroup.Item>{itemDetail.apply}</ListGroup.Item>
                    <ListGroup.Item>
                      Precio unidad: ${itemDetail.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Stock: {itemDetail.stock} unidades
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Card.Body>
            </Col>
            <Col className="colDetail">
              <Row>
                <h3>Detalles de Compra</h3>

                <hr></hr>
                <h3>Total</h3>
              </Row>
              <Row>
                <hr></hr>
                <h4>$ {itemDetail.price}</h4>
              </Row>

              <hr></hr>
              <Row className="rowBtn">
                <ItemBag
                  //Tengo problemas al recibir el stock desde aca
                  stock={itemDetail.stock}
                  id={itemId}
                  init={1}
                  onAdd={onAdd}
                  updateStock={updateStock}
                />
              </Row>
              <hr></hr>

              <Row>
                <h5>Cantidades Enviadas al Carro: {cantCart}</h5>
                <hr></hr>

                <Nav.Link href="/cart" className="btn btn-primary nav-linkpay">
                  PAGAR
                </Nav.Link>
                <Nav.Link href="/" className="btn btn-primary nav-link">
                  VOLVER
                </Nav.Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

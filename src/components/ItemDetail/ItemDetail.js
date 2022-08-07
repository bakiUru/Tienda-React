import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ItemCount } from "../ItemCount/ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ItemDetail.css";
import { Nav } from "react-bootstrap";

const srverImg = "https://saeriego.tech/";

export function ItemDetail({
  nameTitle,
  imgDsc,
  imgSrc,
  description,
  apply,
  price,
  stock,
}) {

  //Actualizo Stock
  const [stockItem, setStockItem] = useState(stock);
  //Actualizo Price
  const [itemPrice, setItemPrice] = useState(0);
  const [cantCart, setCantCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);


  const updateStock = () => {
    setStockItem(stockItem - cantCart);
  };
  useEffect(() => {
    setItemPrice(price)
    setStockItem(stock)
  }, [stock]);

  useEffect(() => {
    updatePrice();
    setTotalCart(totalCart + cantCart);
  }, [cantCart]);

  //actualizo precio
  const updatePrice = () => {
    setItemPrice(price * totalCart);
  };

  const onAdd = (count) => {
    console.log(`Se Enviaron ${count} Al Carro`);
    setCantCart( count);
    console.log('carro en :', cantCart)
    return cantCart;
  };

  useEffect(() => {
    updatePrice();
    setCantCart(0)
    updateStock()
  }, [cantCart]);

  return (
    <>
      <Card>
        <Container>
          <Row>
            <Col>
              <Card.Header>{nameTitle} </Card.Header>
              <Card.Body>
                <Card.Text>{imgDsc}</Card.Text>
                <Card style={{ width: "25rem" }}>
                  <Card.Img
                    loading="lazy"
                    variant="top"
                    src={srverImg + imgSrc}
                  />
                  <Card.Body>
                    <Card.Title>Producto Detallado</Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                  <Card.Header>Aplicaciones</Card.Header>
                  <ListGroup bg="dark" variant="flush">
                    <ListGroup.Item>{apply}</ListGroup.Item>
                    <ListGroup.Item>Precio unidad: ${price}</ListGroup.Item>
                    <ListGroup.Item>Stock: {stockItem} unidades</ListGroup.Item>
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
                <h4>$ {itemPrice}</h4>
              </Row>

              <hr></hr>
              <Row className="rowBtn">
                <ItemCount
                  //Tengo problemas al recibir el stock desde aca
                  stocks={stockItem}
                  init={1}
                  onAdd={onAdd}
                  updateStock={updateStock}
                />
              </Row>
              <hr></hr>

              <Row>
                <h5>
                  Cantidades Enviadas al Carro: <br></br>
                  {totalCart}
                </h5>
                <hr></hr>

                <Nav.Link href="/cart" className="btn btn-primary nav-linkpay">
                  PAGAR
                </Nav.Link>
                <Nav.Link href="/" className="btn btn-primary nav-link">
                  SEGUIR COMPRANDO
                </Nav.Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

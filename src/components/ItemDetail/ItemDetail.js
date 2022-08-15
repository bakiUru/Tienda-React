import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ItemCount } from "../ItemCount/ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const srverImg = "https://saeriego.tech/";

export function ItemDetail({
  id,
  nameTitle,
  imgDsc,
  imgSrc,
  description,
  apply,
  price,
  stock
}) {

//Context
const {addItemsCart} = useContext(CartContext);

  //Actualizo Stock
  const [stockItem, setStockItem] = useState(stock);
  //Actualizo Price
  const [itemPrice, setItemPrice] = useState(0);

  const[pay, setPay] = useState(false);

  const [cantCart, setCantCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);


  const updateStock = () => {
    setStockItem(stockItem - cantCart);
  };
  useEffect(() => {
    setItemPrice(price)
    setStockItem(stock)
  }, [stock]);




  //actualizo precio
  const updatePrice = () => {
    setItemPrice(price * totalCart);
  };

  const onAdd = (count) => {
    setCantCart(count);
    
  };

  useEffect(() => {
    updatePrice();
    setCantCart(0)
    updateStock()
    setTotalCart(totalCart + cantCart);

    if(totalCart >0)
    {
      setPay(!pay);
      addItemsCart(id, nameTitle, totalCart, price,imgSrc);
    }
      

    
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

                <NavLink to="/cart" className="btn btn-primary nav-linkpay" style={{visibility: !pay? 'hidden': 'visible'}}>
                  PAGAR
                </NavLink>
                <NavLink to="/items" className="btn btn-primary nav-link">
                  SEGUIR COMPRANDO
                </NavLink>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

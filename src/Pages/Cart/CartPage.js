import React, { useContext, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";
import { ItemCart } from "../../components/ItemCart/ItemCart";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./CartPage.css";
import { BuyerShop } from "../../components/BuyerForm/BuyerShop";
//Realizar loggin control con un context
const Log = false;
export function CartPage() {
  const { cart, totalAmount, cleanCart, cantItemInCart } = useContext(
    CartContext
  );

  const [cartNow, setCartNow] = useState(cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(totalAmount(cartNow));
    if (cantItemInCart === 0) {
      setCartNow([]);
      setTotalPrice(0);
    }
    setCartNow(cart);
  }, [cantItemInCart]);
  useEffect(() => {
    setTotalPrice(totalAmount(cartNow));
  }, [cartNow]);

  return (
    <>
      {cantItemInCart === 0 ? (
        <>
          <h1>No hay Items en Tu Carro</h1>

          <br></br>
          <br></br>
          <NavLink to="/items" className="btn btn-primarygoShop ">
            Ir de Compras
          </NavLink>
          <br></br>
          <Container>
            <Row>
              <Col></Col>
              <Col xs={6}>
                <iframe
                  width={"500vh"}
                  height={"500vh"}
                  src="https://embed.lottiefiles.com/animation/86046"
                  title="Success Shop"
                >
                  {" "}
                </iframe>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <h1>Tu Carrito</h1>
          <Container className="contTable">
            <Table className="tableCart">
              <thead>
                <tr className="titleTB">
                  <th></th>
                  <th className="unitItem">Unidades</th>
                  <th className="tot">Total</th>
                </tr>
              </thead>
            </Table>
            {cartNow.map((item) => {
              return <ItemCart key={item.id} {...item}></ItemCart>;
            })}
            <Table className="tableCart">
              <tr>
                <th>
                  <h5>TOTAL</h5>
                </th>
                <th>
                  <h5 className="totalPrice">$ {totalPrice}</h5>
                </th>
              </tr>
            </Table>
          </Container>
          <Container>
            <Container className="btnCnt">
              {Log ? (
                <>
                  <NavLink
                    className="btn btn-primarySucces"
                    variant="warning"
                    to="/CheckOut"
                  >
                    Terminar Compra
                  </NavLink>
                  <br></br>
                </>
              ) : (
                <>
                  <BuyerShop />
                  <br></br>
                </>
              )}

              <br></br>
              <NavLink to="/items" className="btn btn-primary ">
                SEGUIR COMPRANDO
              </NavLink>
              <br></br>
              <br></br>
              <Button variant="danger" size="sm" onClick={cleanCart}>
                Vaciar Carro
              </Button>
            </Container>
          </Container>
        </>
      )}
    </>
  );
}

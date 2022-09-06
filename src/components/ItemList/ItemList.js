import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/esm/Container";
import { Item } from "../Item/Item";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./ItemList.css";
import { FilterBtn } from "../FilterBtn/FilterBtn";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  query,
  where,
  orderBy,
  collection,
} from "firebase/firestore";

export function ItemList({ ItemTitle, countCart }) {
  const [listItem, setListItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId, search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //firebase
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (categoryId) {
      const q = query(
        itemsCollection,
        where("category", "==", categoryId),
        orderBy("price")
      );
      setLoading(true);
      getDocs(q)
        .then((snapshot) => {
          setListItem(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setListItem([]);
          console.log("NO hubo conexion", error);
        })
        .finally(() => setLoading(false));
    } else if (search) {
      const q = query(itemsCollection, where("nameTitle", "==", search));
      setLoading(true);
      console.log(search);
      getDocs(q)
        .then((snapshot) => {
          console.log(snapshot.docs.length);
          if (snapshot.docs.length == 0) setListItem([]);
          else
            setListItem(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        })
        .catch((error) => {
          setListItem([]);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      getDocs(itemsCollection)
        .then((snapshot) => {
          setListItem(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          //catchCategory(snapshot) TODO CATEGORIA DINAMICA
        })
        .catch((error) => {
          setListItem([]);
          console.log("NO hubo conexion de Items", error);
        })
        .finally(() => setLoading(false));
    }
  }, [categoryId, search]);

  const gotoItem = (id) => navigate(`/detalles/${id}`);

  function Titulo() {
    if (categoryId !== "/") return <h3 className="titlePage">{categoryId}</h3>;
    else return <></>;
  }

  return (
    <>
      <h3 className="titlePage">{ItemTitle}</h3>

      {loading ? (
        <div className="contLoading">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : (
        <>
          <Titulo></Titulo>
          <FilterBtn />
          <br></br>
          <br></br>
          {listItem.length === 0 && search !== "" ? (
            <>
              <h1>No encontramos productos... </h1>

              <br></br>
              <br></br>

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
                <Row>
                  <NavLink to="/items" className="btn btn-primarygoShop ">
                    Sigamos de Compras
                  </NavLink>
                </Row>
              </Container>
            </>
          ) : (
            <h2></h2>
          )}
          <div id="contItems"></div>
          <Container className="contListItem">
            {listItem.map((item) => (
              <Item
                gotoitem={() => gotoItem(item.id)}
                countCart={countCart}
                key={item.id}
                {...item}
              ></Item>
            ))}
          </Container>
        </>
      )}
    </>
  );
}

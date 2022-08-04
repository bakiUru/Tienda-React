import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/esm/Container";
import { Item } from "../Item/Item";
import "./ItemList.css";

//Guardo Las categorias en el localStorage para capturarla renderizarla con el boton filtrar
const catchCategory = (data) => {
  let dataCategory = data.map((cat) => cat.category);
  let dataCatUnique = [...new Set(dataCategory)];

  //Guardo la info en local storage
  localStorage.setItem("category", dataCatUnique);
};

//Quito el Div
const postLoad = () =>
  document.getElementById("contItems").removeAttribute("class");

export function ItemList({ ItemTitle, countCart }) {
  const [listItem, setListItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  const getItems = () => {
  
      //Recupero la informacion de los productos
      //Colgue el archivo en mi servidor web
      setLoading(true);
      fetch("https://saeriego.tech/itemsData.json")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          if (json.length === 0) {
            setListItem([]);
            return <h1>Ups, no hay productos</h1>;
          } else {
            catchCategory(json);
            if (filterItems(categoryId) == "/") setListItem(json);
            else {
              setListItem(json.filter((item) => item.category == categoryId));
              if (json.length == 0) {
                setListItem([]);
                return <h1>Ups, no hay productos</h1>;
              }
            }
          }
          setLoading(false);
        })
        .catch((rej) => {
          //conItems.appendChild('<p>Error de Conexion</p>');
        });
  
  };

  function Titulo() {
    if (categoryId !== "/")
      return <h3 className="titlePage">{categoryId}</h3>;
    else return <></>;
  }

  const filterItems = (categoryId) => {
    if (categoryId === undefined) categoryId = "/";
    return categoryId;
  };
  useEffect(() => {
    //Cargo los Items
    getItems();
    filterItems(categoryId);
  }, [categoryId]);

  return (
    <>
      <h3 className="titlePage">{ItemTitle}</h3>
      {loading? (
        <div className="contLoading"> 
        <Spinner animation="border" variant="warning" />
        </div>
       
      ) : (
        <>

        <Titulo></Titulo>
          <div id="contItems"></div>
          <Container className="contListItem" onLoad={postLoad}>
            {listItem.map((item) => {
              return (
                <Item countCart={countCart} key={item.id} {...item}></Item>
              );
            })}
          </Container>
        </>
      )}
    </>
  );
}

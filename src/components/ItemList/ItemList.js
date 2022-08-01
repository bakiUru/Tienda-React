import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Item } from "../Item/Item";
import "./ItemList.css";

//Agrego el div con el efecto de preCarga
const preLoad = () => {
  let bodyItem = document.getElementById("contItems");
  document.addEventListener("DOMContentLoaded", () => {
    bodyItem.setAttribute("class", "loader");
  });
};
//Quito el Div
const postLoad = () =>
  document.getElementById("contItems").removeAttribute("class");

export function ItemList({ ItemTitle, countCart }) {
  const [listItem, setListItem] = useState([]);

  const getItems = () => {
    setTimeout(() => {
      //Recupero la informacion de los productos
      //Colgue el archivo en mi servidor web
      fetch("https://saeriego.tech/itemsData.json")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((json) => {
          if (json.length === 0) {
            console.log("Vacio");
            // conItems.appendChild('<p>Sin Datos</p>');
            setListItem([]);
          } else {
            //conItems.appendChild('<p>Sin Datos</p>');
            setListItem(json);
          }
        })
        .catch((rej) => {
          //conItems.appendChild('<p>Error de Conexion</p>');
        });
    }, 2000);
  };

  useEffect(() => {
    preLoad();
    //Cargo los Items
    getItems();
  }, []);

  return (
    <>
      <h3 className="titlePage">{ItemTitle}</h3>
      <div id="contItems"></div>
      <Container className="contListItem" onLoad={postLoad}>
        {listItem.map((item) => {
          return <Item countCart={countCart} key={item.id} {...item}></Item>;
        })}
      </Container>
    </>
  );
}

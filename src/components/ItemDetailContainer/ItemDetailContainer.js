import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from '../ItemDetail/ItemDetail'

const URLproducts = "https://saeriego.tech/itemsData.json";


export function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemId } = useParams();


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
        console.log(rej)
      });
  };

  useEffect(() => {
    getIdItem(itemId);
  }, [itemId]);



  //funcion Select Cantidades
  const buildSelect = () => {};

  return (
    <>
      <ItemDetail 
      {...itemDetail} 


      />
    </>
  );
}

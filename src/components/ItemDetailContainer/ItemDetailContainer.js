import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from '../ItemDetail/ItemDetail'

const URLproducts = "https://saeriego.tech/itemsData.json";


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
        console.log(rej)
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
      <ItemDetail 
      {...itemDetail} 
      onAdd={onAdd}
      updateStock={updateStock}
      cantCart={cantCart}

      />
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemId } = useParams();

  console.log(typeof itemId);


  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = doc(db, "items", itemId);

    getDoc(itemsCollection)
      .then((snapshot) => {
        setItemDetail({ ...snapshot.data(), id: snapshot.id });
      })
      .catch((error) => {
        setItemDetail([]);
        console.log("NO hubo conexion", error);
      });
  }, [itemId]);

  return (
    <>
      <ItemDetail {...itemDetail} />
    </>
  );
}

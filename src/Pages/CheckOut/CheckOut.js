import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import "./CheckOut.css";

export function CheckOut() {
  const [buyer, setBuyer] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    //firebase
    const db = getFirestore();
    const sellsCollection = collection(db, "Sells");
    getDocs(sellsCollection)
      .then((snapshot) => {
        snapshot.docs.forEach((sell) => {
          if (sell.id === orderId) {
            console.log(sell.id);
            setBuyer(sell.data().buyer);
          }
        });
      })
      .catch((error) => {
        setBuyer([]);
        throw new Error(error.message);
      });
  }, [orderId]);

  return (
    <>
      {console.log(buyer)}
      <div className="container1">
        <div className="card1">
          <div className="front">
            <div className="logo1">
              <iframe src="https://embed.lottiefiles.com/animation/33886"></iframe>
              <span></span>
            </div>
          </div>
          <div className="back">
            <h1 className="tarjetah1">
              Gracias Por su Compra
              <span>Tienda SAE Riego</span>
            </h1>
            <ul>
              <li>{buyer.phone}</li>
              <li>{buyer.email}</li>
              <li>{orderId}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export function CheckOut(){
    const { cart } = useContext(CartContext);
    const {orderId} = useParams()

    return (
        <>
        <h1>CheckOut</h1>  
        <h3>Su Compra se ha Finalizado</h3>
        <h4>Gracias Por su Compra</h4>
        <h5>Numero de Pedido es: ${orderId}</h5>
        
        </>
    );
}
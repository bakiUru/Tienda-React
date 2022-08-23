import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";

export function DetailShopPage(){
    const { cart } = useContext(CartContext);

    return (
        <>
        <h1>Detalle de Compra</h1>  
        

        </>
    );
}
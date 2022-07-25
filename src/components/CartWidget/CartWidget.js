import React, {useEffect, useState} from 'react';
import Button from "react-bootstrap/esm/Button";
import Badge from 'react-bootstrap/Badge';
import {AiOutlineShoppingCart}  from 'react-icons/ai';
import './CartWidget.css'



export function CartWidget (props){
    const changeCart = props.countCart();
    const [countCart, setCountCart] = useState('');
 
    useEffect(()=>{
        setCountCart(changeCart);

    },[countCart])
    

    return (
        <div >
        <Button className="cartBtn" variant="outline-light">
            <AiOutlineShoppingCart className="cartIcon"/><Badge pill bg="warning" text="dark">{countCart}</Badge>
      </Button>
        </div>

    );
}
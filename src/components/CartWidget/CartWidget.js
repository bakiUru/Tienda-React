import * as React from "react";
import Button from "react-bootstrap/esm/Button";
import Badge from 'react-bootstrap/Badge';
import {AiOutlineShoppingCart}  from 'react-icons/ai';
import './CartWidget.css'



export function CartWidget (){
    return (
        <div >
                    <Button className="cartBtn" variant="outline-light">
            <AiOutlineShoppingCart className="cartIcon"/><Badge pill bg="warning" text="dark">9</Badge>
      </Button>
        </div>

    );
}
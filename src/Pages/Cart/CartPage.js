import  React, {useContext,useState,useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {CartContext} from '../../Context/CartContext';
import { ItemCart } from '../../components/ItemCart/ItemCart';
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

import './CartPage.css'


export function CartPage(){
    const {cart, totalAmount , cleanCart, cantItemInCart} = useContext(CartContext);
    
    const[cartNow, setCartNow] = useState(cart);
    const[totalPrice, setTotalPrice] = useState(0);


    useEffect(()=>{


    },[cartNow])
    
    useEffect(()=>{
          
            setTotalPrice(totalAmount(cartNow))
            console.log(totalAmount(cartNow))
            if (cantItemInCart==0)
            {
                setCartNow([])
                setTotalPrice(0)
            }
        },[cantItemInCart])

 
        
    return( 
        <>
        <h1>Tu Carrito</h1>
        <Container className='contTable'>
        <Table className='tableCart'>
        <thead>
          <tr>
            <th >Item</th>
            <th className='unitItem'>Unidades</th>
            <th className='tot'>Total</th>
          </tr>
        </thead>
        </Table>
        {cartNow.map(item=>{
            return (<ItemCart key={item.id} {...item}></ItemCart>)
        })}
        <Table className='tableCart'>
        <tr>
            <th><h5>TOTAL</h5></th>
            <th><h5>$ {totalPrice}</h5></th>
        </tr>
        </Table>
        </Container>
        <Container>
        <Button
        variant="danger"
        onClick={cleanCart}
      >
        Vaciar Carro
      </Button>

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <NavLink to="/items" className="btn btn-primary ">
                  SEGUIR COMPRANDO
        </NavLink>
        </Container>
        </>
        
    );
}
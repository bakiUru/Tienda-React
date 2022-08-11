import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const  CartProvider = ({children})=>{
const [cart, setCart] = useState([])

    //Clase de objeto de Compra
class CartShopItem 
{
  constructor (id, nameItem, quantity, price){
    this.id = id;
    this.nameItem = nameItem;
    this.quantity = quantity;
    this.price = price*quantity;
  }
  }
  
  //Context - Funciones
  const isInCart=(cart,id)=>{
    return  cart.find(item=>item.id == id)
     
  }

  const cleanCart = () => setCart([]);


  //Envio datos al carro
  const addItemsCart=(id, nameItem, quantity, price)=>{
    let newItem = new CartShopItem(id, nameItem, quantity, price);

    
    //Si no esta vacio el Carro ->Buscar elemento
      if (cart.length != 0){
        //Encuentra y modifica cantidad
        if(isInCart(cart,id)){
          setCart( cart.map(item=>item.id == id
            ? { ...item, quantity: newItem.quantity, price: price*quantity } : item))
          console.log('lo encontre:',cart)
          console.log("Se sumaron:"+(newItem.quantity)+" cantidades"); 
          console.log("ES la funcion ",isInCart(cart,id))

      }
      //No encuentra Agrega uno nuevo
      else{
        setCart([...cart, {...newItem}]);
        console.log('Nuevo item al Carro.');
        
        }

      }
      //Si esta Vacio Crea El primer Elemento
      else
        setCart([newItem])




         
            
          

          
    

          console.log("Que hay en el Carro:",cart);
  }
  
  //Cantidad de unidades 
  const CantUnitCart = () =>{
    cart.map(item => {return cart.quantity + item.quantity})
  }

  return (
    <CartContext.Provider value={{
        cart,
        isInCart,
        addItemsCart, 
        CantUnitCart,
        cleanCart,
        cantItemInCart : cart.length
        }}>

    {children}
    </CartContext.Provider>
  )

}

export default CartProvider
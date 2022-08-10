import React, { createContext, useState } from "react";

export const CartContext = createContext(0);

const  CartProvider = ({children})=>{
const [cart, setCart] = useState([])

    //Clase de objeto de Compra
function CartShopItem (id, nameItem, quantity, price){
    this.id = id;
    this.nameItem = nameItem;
    this.quantity = quantity;
    this.price = price*quantity;
  }
  
  //Context - Funciones
  const isInCart=(newItem)=>{
    return cart.filter(cart=>cart.id == newItem.id)
  }

  const clanCart = () => setCart([]);


  //Envio datos al carro
  const addItemsCart=(id, nameItem, quantity, price)=>{
    let newItem = new CartShopItem(id, nameItem, quantity, price);
      if (cart.length == 0)
        {
          setCart([{newItem}])
          console.log(cart)
        }
        else if(isInCart(newItem)){
            //Sumo solo cantidades
            cart.quantity = cart.quantity + newItem.quantity;
            console.log("Se encontro el item ya en el carro!");
            console.log("Se sumeron:"+newItem.quantity+" cantidades");
        }else{
          setCart([...cart, {...newItem}]);
          console.log(cart);
          console.log(newItem);
        }

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
        cantItemInCart : cart.length
        }}>

    {children}
    </CartContext.Provider>
  )

}

export default CartProvider
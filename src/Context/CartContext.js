import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Clase de objeto de Compra
  class CartShopItem {
    constructor(id, nameItem, quantity, price,img) {
      this.id = id;
      this.nameItem = nameItem;
      this.quantity = quantity;
      this.price = price * quantity;
      this.img = img;

    }
  }

  //Context - Funciones
  const isInCart = (cart, id) => {
    return cart.find((item) => item.id == id);
  };

  const totalAmount = (cart) =>{
    
    return cart.map(element => element.price).reduce((a, b) => a + b, 0);
       
  }
  const cleanCart = () => setCart([]);

  //Envio datos al carro
  const addItemsCart = (id, nameItem, quantity, price,img) => {
    let newItem = new CartShopItem(id, nameItem, quantity, price,img);

    //Si no esta vacio el Carro ->Buscar elemento
    if (cart.length != 0) {
      //Encuentra y modifica cantidad
      if (isInCart(cart, id)) {
        setCart(
          cart.map((item) =>
            item.id == id
              ? { ...item, quantity: newItem.quantity, price: price * quantity }
              : item
          )
        );
        console.log("lo encontre:", cart);
        console.log("Se sumaron:" + newItem.quantity + " cantidades");
        console.log("ES la funcion ", isInCart(cart, id));
      }
      //No encuentra Agrega uno nuevo
      else {
        setCart([...cart, { ...newItem }]);
        console.log("Nuevo item al Carro.");
      }
    }
    //Si esta Vacio Crea El primer Elemento
    else setCart([newItem]);

    console.log("Que hay en el Carro:", cart);
  };

  //Cantidad de unidades
  const itemUnitCart = () => {
    cart.map((item) => {
      return cart.quantity + item.quantity;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addItemsCart,
        itemUnitCart,
        cleanCart,
        totalAmount,
        cantItemInCart: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

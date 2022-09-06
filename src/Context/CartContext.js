import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Context - Funciones
  const isInCart = (cart, id) => {
    return cart.find((item) => item.id === id);
  };

  const totalAmount = (cart) => {
    return cart.map((element) => element.price).reduce((a, b) => a + b, 0);
  };
  const cleanCart = () => setCart([]);

  //Borro Item del Carro
  const delItemCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //Envio datos al carro
  const addItemsCart = (id, nameItem, quantity, price, img) => {
    const newItem = {
      id: id,
      nameItem: nameItem,
      quantity: quantity,
      price: price,
      img: img,
    };

    //Si no esta vacio el Carro ->Buscar elemento
    if (cart.length !== 0) {
      //Encuentra y modifica cantidad
      if (isInCart(cart, id)) {
        setCart(
          cart.map((item) =>
            item.id === id
              ? { ...item, quantity: newItem.quantity, price: price * quantity }
              : item
          )
        );
      }
      //No encuentra Agrega uno nuevo
      else setCart([...cart, { ...newItem }]);
    }
    //Si esta Vacio Crea El primer Elemento
    else setCart([newItem]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        addItemsCart,
        cleanCart,
        delItemCart,
        totalAmount,
        cantItemInCart: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

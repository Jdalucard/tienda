import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setcardItem] = useState(() => {
    //local storage
    try {
      /* Verificamos si hay productos en el local storage,
      si hay algo lo parseamos porque se guarda como string 
      y si no hay nada devolvemos un array vacio */
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  /* Cada vez que se actualize el carrito seteamos el local storage para guardar los productos */
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  ///añadir productos
  const addItemTocart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    /* Si el producto se encuentra en el carrito, recorremos el carrito
    y al producto le sumamos uno a la cantidad, sino retornamos el carrito como estaba */
    if (inCart) {
      setcardItem(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setcardItem([...cartItems, { ...product, amount: 1 }]);
    }
  };
  /* Creamos la funcion para borrar productos del carrito */
  const deleteItemToCart = (productId) => {
    /* Buscamos el producto con su id */
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === productId
    );
    /* Si la cantidad del producto es igual a 1, filtramos el carrito y lo sacamos */
    if (inCart.amount === 1) {
      setcardItem(
        cartItems.filter((productInCart) => productInCart.id !== productId)
      );
    } else {
      /* Si la cantidad es mayor a 1, recorremos el carrito
      y al producto le restamos uno en su cantidad, sino devolvemos el carrito como estaba */
      setcardItem(
        cartItems.map((productInCart) => {
          if (productInCart.id === productId) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };
  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, addItemTocart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

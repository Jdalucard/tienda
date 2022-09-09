import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setcardItem] = useState(() => {
    //local storage
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  ///añadir productos

                    const addItemTocart = (product) => {
                const inCart = cartItems.find(
                  (productInCart) => productInCart.id === product.id
                );

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
              } 
    //Borrar productos
    const deleteItemToCart = (product) => {
      const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
      );
      if (inCart.amount === 1) {
        setcardItem(
          cartItems.filter((productInCart) => productInCart.id !== product.id)
        );
      } else {
        setcardItem((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart - 1 };
          } else return productInCart;
        });
      }
    };
    return(
      <CartContext.Provider value={{cartItems,addItemTocart,deleteItemToCart}}>
        {children}
      </CartContext.Provider>
    )
  };


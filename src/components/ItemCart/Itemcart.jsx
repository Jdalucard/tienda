import React, { useContext } from "react";
import  CartContext  from "../../context/CartContext";
import styles  from './styles.module.scss'

const Itemcart = ({ item }) => {
  const { deleteItemToCart, addItemTocart } = useContext(CartContext);

  const { id } = item;

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => addItemTocart(item)}>Agregar</button>
            <button onClick={() => deleteItemToCart(id)}>Eliminar</button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>

  )
};

export default Itemcart;

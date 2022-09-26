import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { NavLink } from "react-router-dom";
import styles  from "./styles.scss/styles.module.scss" 


const ProductList = () => {
  const { products, obtenerProductos, eliminarProducto } =
    useContext(ProductContext);


  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  console.log(products)
  return (

    <>
      <div className={styles.contenedorLista}>
    <ul>
    {products.map((elemento) => (
        <li key={elemento.id}>
          <h1>{elemento.id}</h1>
          <p>{elemento.nombre}</p>
          <h2>{elemento.precio}</h2>
          <p>{elemento.descripcion}</p>
          <p>{elemento.cantidad}</p>
          <p>{elemento.createdAt}</p>
          <p>{elemento.updatedAt}</p>
          {elemento.image && <img alt={elemento.nombre} src={elemento.image.secure_url}/>}
          <NavLink to={`/products/${elemento.id}`} className="btn btn-info">
            Ver mas...
          </NavLink>
          <button
            onClick={() => eliminarProducto(elemento.id)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </li>
      ))}
      
    </ul>
    </div>
    </>
  );
};

export default ProductList;

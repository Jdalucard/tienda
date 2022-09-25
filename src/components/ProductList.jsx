import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { NavLink } from "react-router-dom";

const ProductList = () => {
  const { products, obtenerProductos, eliminarProducto } =
    useContext(ProductContext);

  /* A hook that is called after the first render. */
  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
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
          {elemento.image && <img    alt={elemento.nombre} src={elemento.image.url}/>}
     
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
    
  );
};

export default ProductList;

import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { NavLink } from "react-router-dom";
import styles from "./styles.scss/styles.module.scss";

const ProductList = () => {
  const { products, obtenerProductos, eliminarProducto } =
    useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
    <>
      <div className={styles.contenedorLista}>
        <div className={styles.first}>
          {products.map((elemento) => (
            <div
              className={styles.card}
              key={elemento.id}
              style={{ width: "20rem" }}
            >
              {elemento.image && (
                <img
                  className={styles.img}
                  alt={elemento.nombre}
                  src={elemento.image.secure_url}
                />
              )}
              <div className={styles.bodyCard}>
                <h5 className="card-title mt-2 ms-3 mb-3">{elemento.nombre}</h5>
                <hr />
                <h5 className="card-title ms-3 mb-3">{elemento.precio}</h5>
                <h5 className="card-title ms-3 mb-3">{elemento.descripcion}</h5>
                <h5 className="card-title ms-3 mb-3">{elemento.cantidad}</h5>
              </div>
              <div className={styles.containerBoton}>
                <NavLink
                  to={`/products/${elemento.id}`}
                  className="btn btn-info mb-2 ms-4 "
                >
                  Ver mas...editor
                </NavLink>

                <button
                  onClick={() => eliminarProducto(elemento.id)}
                  className="btn  ms-3 btn-danger mb-2 "
                >
                  Eliminar
                </button>

                <NavLink
                  to={`/productos/${elemento.id}`}
                  className="btn btn-success ms-4 mb-2 "
                >
                  Comprar
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

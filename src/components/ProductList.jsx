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
        {products.map((elemento) => (
          <div
            className="card mb-3 ms-4 "
            key={elemento.id}
            style={{ width: "20rem" }}
          >
            <div className="">
              {elemento.image && (
                <img
                  className="card-img-top"
                  alt={elemento.nombre}
                  src={elemento.image.secure_url}
                />
              )}
              <div className="card-body  ">
                <h5 className="card-title ms-3 mb-3">{elemento.nombre}</h5>
                <h5 className="card-title ms-3 mb-3">{elemento.precio}</h5>
                <h5 className="card-title ms-3 mb-3">{elemento.descripcion}</h5>
                <h5 className="card-title ms-3 mb-3">{elemento.cantidad}</h5>
              </div>
              <div className="ms-4">
                <NavLink
                  to={`/products/${elemento.id}`}
                  className="btn btn-info mb-3  "
                >
                  Ver mas...editor
                </NavLink>

                <button
                  onClick={() => eliminarProducto(elemento.id)}
                  className="btn  ms-3 btn-danger mb-3 "
                >
                  Eliminar
                </button>
              </div>
              <NavLink
                to={`/productos/${elemento.id}`}
                className="btn btn-success mb-3 ms-4 "
              >
                Comprar
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;

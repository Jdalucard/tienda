import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import ProductContext from "../context/ProductContext";

const CartList = () => {
  const { cart, eliminarProductoCarrito } = useContext(ProductContext);
  return (
    <>
      <div className="table-responsive mt-4">
        <div className="mt-5">
          <h1>Resumen de tu compra</h1>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Ver más productos</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((producto) => (
              <tr className="mt-2" key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td className="mt-5">
                  <NavLink to={"/"}>
                    <button className="btn btn-primary">
                      {" "}
                      Ve más productos
                    </button>
                  </NavLink>
                </td>
                <td className="mt-5">
                  <button
                    className="btn  btn-danger"
                    onClick={() => eliminarProductoCarrito(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartList;

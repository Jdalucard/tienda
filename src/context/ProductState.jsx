import React, { useCallback, useReducer, useState } from "react";
import ProductContext from "./ProductContext";
import reducer from "./ProductReducer";
import {
  obtenerProductosService,
  crearProductoservices,
  actulizarProductoServices,
  unProductoServices,
  eliminarProcutosservices,
} from "../services/ProductServices";

const initialState = {
  products: [],
  product: {
    id: "",
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
    createdAt: "",
    updatedAt: "",
    image: {
      public_id: "",
      secure_url: "",
    },
  },
  cart: [],
};

const Productstate = ({ children }) => {
  const [productosGlobales, dispatch] = useReducer(reducer, initialState);
  const [posts, setPosts] = useState([]);

  // formulario
  const obtenerProductos = useCallback(async () => {
    const resp = await obtenerProductosService();

    const productos = resp.datos.map((obj) => {
      return {
        id: obj.id,
        nombre: obj.nombre,
        descripcion: obj.descripcion,
        precio: obj.precio,
        cantidad: obj.cantidad,
        createdAt: obj.createdAt,
        updatedAt: obj.updatedAt,
        image: obj.image,
      };
    });

    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: productos,
    });
  }, []);

  const crearProducto = async (formulario) => {
    try {
      await crearProductoservices(formulario);
      await obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const unProducto = useCallback(async (idProducto) => {
    const resp = await unProductoServices(idProducto);

    const producto = {
      id: resp.datos.id,
      nombre: resp.datos.nombre,
      descripcion: resp.datos.descripcion,
      precio: resp.datos.precio,
      cantidad: resp.datos.cantidad,
      createdAt: resp.datos.createdAt,
      updatedAt: resp.datos.updatedAt,
      image: resp.datos.image,
    };
    dispatch({
      type: "UN_PRODUCTO",
      payload: producto,
    });
  }, []);

  //1 producto
  const actulizarProducto = async (id, formulario) => {
    try {
      const res = await actulizarProductoServices(id, formulario);
      setPosts(posts.map((post) => (post.id === id ? res : post)));

      await unProducto();
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await eliminarProcutosservices(id);
      await obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const agregarProductoCarrito = (product) => {
    const productoEncontrado = productosGlobales.cart.find(
      (producto) => product.id === producto.id
    );

    if (!productoEncontrado) {
      dispatch({
        type: "AGREGAR_PRODUCTO_CARRITO",
        payload: product,
      });
    }
  };

  const eliminarProductoCarrito = (id) => {
    dispatch({
      type: "ELIMINAR_PRODUCTO_CARRITO",
      payload: id,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: productosGlobales.products,
        obtenerProductos,
        crearProducto,
        unProducto,
        eliminarProducto,
        product: productosGlobales.product,
        actulizarProducto,
        agregarProductoCarrito,
        cart: productosGlobales.cart,
        eliminarProductoCarrito,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Productstate;

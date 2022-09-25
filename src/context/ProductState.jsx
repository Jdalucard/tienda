import React, { useCallback, useReducer } from "react";
import ProductContext from "./ProductContext";
import reducer from "./ProductReducer";
import {
  obtenerProductosService,
  crearProductoservices,
  actulizarProductoServices,
  unProductoServices,eliminarProcutosservices
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
};
const Productstate = ({ children }) => {
  const [productosGlobales, dispatch] = useReducer(reducer, initialState);

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
    await crearProductoservices(formulario);
    await obtenerProductos();
  };



    const  unProducto=useCallback(async(idProducto)=>{
        const resp = await unProductoServices(idProducto);

      
        const producto={
          id:resp.datos.id,
          nombre:resp.datos.nombre,
          descripcion:resp.datos.descripcion,
          precio:resp.datos.precio,
          cantidad:resp.datos.cantidad,
          createdAt: resp.datos.createdAt,
          updatedAt: resp.datos.updatedAt,
          image: resp.datos.image,
        }
        dispatch({
          type: "UN_PRODUCTO",
          payload:producto
        })
    },[]);


//1 producto
  const actulizarProducto = async (id, formulario) => {
    try {
      await actulizarProductoServices(id, formulario);
      await obtenerProductos();
    } catch (error) {
      console.log(error)
    }

  };

  const eliminarProducto= async(id)=>{
 try {
  await eliminarProcutosservices (id)
  await obtenerProductos();
 } catch (error) {
console.log(error)
 }
  }

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
      
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Productstate;

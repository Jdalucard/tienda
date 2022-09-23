import React,{ createContext, useCallback, useReducer,  } from "react"
import { obtenerProductosService } from "../services/ProductServices";
import {reducer}from "../context/ProductReducer"
export const ProductContext = createContext();

const initialState={
  products: {
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
    image: {
      public_id: "",
      secure_url: "",
    },
  },

}
const ContexProducts = () => {
  const [productosGlobales,dispatch]=useReducer(reducer,initialState)

  // formulario
  const obtenerProductos= useCallback(async()=>{
    const resp =await obtenerProductosService();
    const productos =resp.data.map((elemento )=>{

      
      return{
        id:elemento.id,
        nombre:elemento.nombre,
        precio:elemento.precio,
        cantidad:elemento.cantidad,
        image:{  public_id: "",
        secure_url: "",}
      }
    })
    dispatch({
      type:"OBTENER_PRODUCTOS",
      payload:productos
    });
  }, [])

  
  return (
    <ProductContext.Provider value={{products:productosGlobales.products, obtenerProductos,}}></ProductContext.Provider>
  )
}

export default ContexProducts



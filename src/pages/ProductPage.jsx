import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ContexProducts";



const Productpage = () => {
  const {id}=useParams();
  const {obtenerProductos}=useContext(ProductContext)
  
  return(<>



  </>)
};

export default Productpage;

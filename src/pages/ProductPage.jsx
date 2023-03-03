import React from "react";

import Formulario from "../components/Formulario";
/* import ProductForm from "../components/ProductForm"; */
import ProductList from "../components/ProductList";

const Productspage = () => {
  return (
    <>
      <div className="container-fluid">
        <Formulario />

        <ProductList />
      </div>
    </>
  );
};

export default Productspage;

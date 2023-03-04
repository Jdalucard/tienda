import React from "react";

import Formulario from "../components/Formulario";

import ProductList from "../components/ProductList";
import style from "./style.module.scss";

const Productspage = () => {
  return (
    <>
      <div className={style.home}>
        <Formulario />

        <ProductList />
      </div>
    </>
  );
};

export default Productspage;

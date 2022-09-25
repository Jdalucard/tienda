import React from "react";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import ProductFormtwo from "../components/ProductFormTwo";


const  Productspage = () => {

  return(<>

  

    <main className="row ">
        <article className="col-md-6">

        <ProductForm/> 
        <ProductFormtwo/>
        </article>     


            <section className="row ">
        <article className="col-md-6">
   
        
        <ProductList/> 
        </article>     
      </section>
      </main>

  </>)
};

export default Productspage;

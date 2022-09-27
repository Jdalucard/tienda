import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";

import { useParams } from "react-router-dom";
import ProductFormEdit from "../components/ProductFormEdit";

const ProductPage = () => {
  const { id } = useParams();
  const { unProducto, product, } =
    useContext(ProductContext);

    console.log(product)

  useEffect(() => {
    unProducto(id);
  }, [id, unProducto]);

  return (
    <>
  
      <main className="row pt-5">
        <article className="col-md-4">
          <ProductFormEdit/>
        </article>
        <article className="col-md-8 mt-5">
          <div className="card m-5" style={{ width: "18rem" }}>
            {product.image && <img    alt={product.nombre} src={product.image.secure_url}/>}
            <div className="card-body">
            <p className="card-text">{product.id}</p>
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">{product.descripcion}</p>
              <p className="card-text">{product.precio}</p>
              <p className="card-text">{product.cantidad}</p>
            
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default ProductPage;
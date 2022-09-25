import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";

import { useParams } from "react-router-dom";
import ProductFormEdit from "../components/ProductFormEdit";

const ProductPage = () => {
  const { id } = useParams();
  const { unProducto, product,  } =
    useContext(ProductContext);


  useEffect(() => {
    unProducto(id);
  }, [id, unProducto]);

  return (
    <>
  
      <main className="row pt-5">
        <article className="col-md-4">
          <ProductFormEdit />
        </article>
        <article className="col-md-8">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"
              className="card-img-top"
              alt={product.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">{product.description}</p>
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
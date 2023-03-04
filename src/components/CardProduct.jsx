import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

const CardProduct = () => {
  const { product } = useContext(ProductContext);
  return (
    <>
      <div className="card text-sm-center" style={{ width: "20rem" }}>
        <img
          src={product.image.secure_url}
          className="card-img-top"
          alt="albun de discos"
        />
        <div className="card-body mb-4">
          <h5 className="card-title">{product.nombre}</h5>
          <hr />
          <p className="card-text">{product.descripcion}</p>
          <p className="card-text">{product.precio}</p>
          <p className="card-text">{product.cantidad}</p>
        </div>
      </div>

      {/* 
              <main className="row ">
                <article className="col-md-6"></article>
                <article className="col-md-8">
                  <div className="card ms-5" style={{ width: "20rem" }}>
                    {product.image && (
                      <img alt={product.nombre} src={product.image.secure_url} />
                    )}
                    <div className=" container-sm   card-body">
                      {/*   <p className="card-text">{product.id}</p> */}
      {/*    <h5 className="card-title">{product.nombre}</h5>
                      <p className="card-text">{product.descripcion}</p>
                      <p className="card-text">{product.precio}</p>
                      <p className="card-text">{product.cantidad}</p> */}
      {/*        </div>
                  </div>
                </article>
              </main>
 */}
    </>
  );
};

export default CardProduct;

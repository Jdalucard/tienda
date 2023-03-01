import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";

import { useParams } from "react-router-dom";

const PageProductClient = () => {
  const { id } = useParams();
  const { unProducto, product, agregarProductoCarrito } =
    useContext(ProductContext);

  useEffect(() => {
    unProducto(id);
  }, [id, unProducto]);

  const AgregarAlCarro = () => {
    agregarProductoCarrito(product);
  };
  return (
    <>
      <div
        className="
      container d-flex  "
      >
        <div className=" d-flex flex-wrap ">
          <main className="row pt-2">
            <article className="col-md-6"></article>
            <article className="col-md-8 mt-5">
              <div className="card m-5" style={{ width: "18rem" }}>
                {product.image && (
                  <img alt={product.nombre} src={product.image.secure_url} />
                )}
                <div className="card-body">
                  {/*   <p className="card-text">{product.id}</p> */}
                  <h5 className="card-title">{product.nombre}</h5>
                  <p className="card-text">{product.descripcion}</p>
                  <p className="card-text">{product.precio}</p>
                  <p className="card-text">{product.cantidad}</p>

                  <button
                    type="button"
                    className="btn btn-info  p-2 ms-5 text-center "
                    onClick={AgregarAlCarro}
                  >
                    Agregar al carro{" "}
                  </button>
                </div>
              </div>
            </article>
          </main>

          <div
            className="  accordion p-5 mt-5"
            id="accordionPanelsStayOpenExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Precio o ofertas del producto #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <strong>Título de la publicidad</strong>
                  Puedes colocar una oferta comercial o promociones vigentes
                  <code></code>, overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Descripcion #2
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <strong>Descripcion.</strong>
                  <code></code>, aqui puedes colocar caracteristicas del tu
                  producto .
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Revision de clientes #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <strong>calificacion clientes </strong> En esta seccion se
                  puede colocar comentarios o revisiones del productos de
                  clientes
                  <code></code>,
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageProductClient;

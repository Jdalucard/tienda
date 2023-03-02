import React, { useEffect, useContext /* useState */ } from "react";
import ProductContext from "../context/ProductContext";

import { useParams } from "react-router-dom";
import ProductFormEdit from "../components/ProductFormEdit";

const ProductPage = () => {
  const { id } = useParams();
  const { unProducto, product } = useContext(ProductContext);
  /*   const producto = product; */
  /*   const [Producto, setProducto] = useState(producto); */

  useEffect(() => {
    unProducto(id);
  }, [id, unProducto]);

  if (
    !product.nombre ||
    !product.descripcion ||
    product.precio ||
    product.cantidad
  ) {
  }

  useEffect(() => {}, []);
  /*   useEffect(() => {}, []);
  console.log(producto); */
  console.log(product);
  return (
    <>
      <main className="row pt-5">
        <article className="col-md-4">
          <ProductFormEdit />
        </article>
        <article className="col-md-8 mt-5">
          <div className="card m-5" style={{ width: "18rem" }}>
            {product.image && (
              <img alt={product.nombre} src={product.image.secure_url} />
            )}
            <div className=" container-sm   card-body">
              {/*   <p className="card-text">{product.id}</p> */}
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

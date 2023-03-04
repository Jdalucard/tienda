import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import CardProduct from "../components/CardProduct";

import { useParams } from "react-router-dom";

const initialState = {
  initialState: {
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
    image: {
      public_id: null,
      secure_url: null,
    },
  },
};

const ProductFormEdit = () => {
  const {
    actulizarProducto,
    unProducto /* crearProducto */,
    /* product */

    /* obtenerProductos */
  } = useContext(ProductContext);

  const [post, setpost] = useState({ initialState });

  const { id } = useParams();

  useEffect(() => {
    const obtenerProducto = async () => {
      const res = await unProducto(id);
      setpost(res);
    };
    obtenerProducto();
  }, [id, unProducto]);

  /* useEffect(() => {
    unProducto(id);
  }, [id, unProducto]); */

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h2 className="mt-5  ms-5 mx-5 py-5">Actualizar Producto</h2>
      </div>

      <div className=" mt-1 container-fluid d-flex flex-wrap">
        <Formik
          initialValues={{
            post,
            /*id: id,*/
          }}
          validationSchema={Yup.object({
            nombre: Yup.string().required("El titulo es requerido"),
            descripcion: Yup.string().required("La descripcion es requerida "),
          })}
          onSubmit={async (values, formulario, actions) => {
            await actulizarProducto(id, values);
            actions.setSubmitting(false);
            navigate("/");
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form className="w-100 p-3  mx-5" onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <Field
                  className=" form-control"
                  name="nombre"
                  placeholder="Nombre"
                />
              </div>

              <div className="mb-3">
                <Field
                  className=" form-control"
                  name="descripcion"
                  placeholder="Descripcion"
                />
              </div>
              <div className="mb-3">
                <Field
                  className=" form-control"
                  name="precio"
                  placeholder="Precio"
                />
              </div>
              <Field
                className=" form-control"
                name="cantidad"
                placeholder="Cantidad"
                /*defaultValue={product.cantidad}*/
              />

              <div className="mt-3">
                <input
                  className="btm btn-success"
                  type="file"
                  name="image"
                  onChange={(evento) =>
                    setFieldValue("image", evento.target.files[0])
                  }
                />
              </div>

              <div className="mt-3 text-center">
                <button className="btn btn-warning" type="submit">
                  Actulizar
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div>
          <CardProduct />
        </div>
      </div>
    </>
  );
};
export default ProductFormEdit;

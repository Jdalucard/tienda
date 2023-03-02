import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

import { useParams } from "react-router-dom";

/* const initialState = {
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
}; */

const ProductFormEdit = () => {
  const { actulizarProducto, unProducto, product /* crearProducto */ } =
    useContext(ProductContext);

  const { id } = useParams();

  useEffect(() => {
    unProducto(id);
  }, [id, unProducto]);
  const navigate = useNavigate();

  /* useEffect(() => {
    const obtenerProducto = async () => {
      const res = await unProducto(id);
      setproducto(res);
    };
    obtenerProducto();
  }, [Producto]); */

  return (
    <>
      <div className="container-fluid mb-5">
        <h1 className="mt-5">Actualizar Producto</h1>
        <div className=" container mt-3 d-flex justify-content-center align-items-center">
          <Formik
            initialValues={{
              id,
              /*id: id,*/
            }}
            validationSchema={Yup.object({
              nombre: Yup.string().required("El titulo es requerido"),
              descripcion: Yup.string().required(
                "La descripcion es requerida "
              ),
            })}
            onSubmit={async (values, formulario, actions) => {
              await actulizarProducto(id, values);
              actions.setSubmitting(false);
              navigate("/");
            }}
            enableReinitialize
          >
            {({ handleSubmit, setFieldValue }) => (
              <Form className="w-100 p-3 ms-1 mx-5" onSubmit={handleSubmit}>
                <div className="mb-3 ">
                  <Field
                    className=" form-control"
                    name="nombre"
                    placeholder="Nombre"
                    defaultValue={product.nombre}
                  />
                </div>

                <div className="mb-3">
                  <Field
                    className=" form-control"
                    name="descripcion"
                    placeholder="Descripcion"
                    defaultValue={product.descripcion}
                  />
                </div>
                <div className="mb-3">
                  <Field
                    className=" form-control"
                    name="precio"
                    placeholder="Precio"
                    defaultValue={product.precio}
                  />
                </div>
                <Field
                  className=" form-control"
                  name="cantidad"
                  placeholder="Cantidad"
                  defaultValue={product.cantidad}
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
                    Actulizar Producto
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default ProductFormEdit;

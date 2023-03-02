import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
/* import { NavLink } from "react-router-dom"; */
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

import { useParams } from "react-router-dom";

const ProductFormEdit = () => {
  const { id } = useParams();

  const { actulizarProducto } = useContext(ProductContext);

  

  return (
    <>
      <div className="container-fluid mb-5">
        <h1 className="mt-5">Actualizar Producto</h1>
        <div className=" container mt-3 d-flex justify-content-center align-items-center">
          <Formik
            initialValues={{
              id: id,
            }}
            validationSchema={Yup.object({
              nombre: Yup.string().required("El titulo es requerido"),
              descripcion: Yup.string().required(
                "La descripcion es requerida "
              ),
            })}
            onSubmit={async (formulario) => {
              await actulizarProducto(id, formulario);
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

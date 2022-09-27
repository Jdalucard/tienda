import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";

const Formulario = () => {
  const { crearProducto } = useContext(ProductContext);

  return (
    <>
      <div className="container-fluid mb-5">
        <h1>Registro Producto</h1>
        <div className=" container mt-5 d-flex justify-content-center align-items-center">
          <h1 className="p-5 m-">Registro del Producto</h1>
          <Formik
            initialValues={{
              nombre: "",
              descripcion: "",
              precio: "",
              cantidad: "",
              image: {
                public_id: null,
                secure_url: null,
              },
            }}
            validationSchema={Yup.object({
              nombre: Yup.string().required("El titulo es requerido"),
              descripcion: Yup.string().required(
                "La descripcion es requerida "
              ),
            })}
            onSubmit={async (values) => {
              await crearProducto(values);
            }}
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
                  <button className="btn btn-success" type="submit">
                    Crear Producto
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

export default Formulario;

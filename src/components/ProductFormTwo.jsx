import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Form, Formik, Field } from "formik";

const initForm = {
  nombre: "",
  descripcion: "",
  precio: "",
  cantidad: "",
  image: null,
};

const ProductForm = () => {
  const { crearProducto } = useContext(ProductContext);

  return (
    <>
      <div>
        <Formik
          initialValues={{
            initForm,
          }}
          onSubmit={(values, actions) => {
            crearProducto(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="nombre" placeholder="nombre" />
              <Field name="descripcion" placeholder="descripcion" />
              <Field name="precio" placeholder="precio" />
              <button type="submit">Crear Producto</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ProductForm;

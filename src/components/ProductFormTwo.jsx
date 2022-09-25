import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";

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
          validationSchema={Yup.object({
            nombre: Yup.string().required("El titulo es requerido"),
            descripcion: Yup.string().required("La descripcion es requerida "),
          })}
          onSubmit={async (values) => {
            await crearProducto(values);

            console.log(values)
          }}
        >
          {({ handleSubmit,setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
            <label>
              <Field name="nombre" placeholder="nombre" />
              <ErrorMessage component="p" name="nombre" />
              </label>
              <label>
              <Field name="descripcion" placeholder="descripcion" />
              <ErrorMessage component="p" name="descripcion" />
              </label>
              <label>
              <Field name="precio" placeholder="precio" />
              <ErrorMessage component="p" name="precio" />
              </label>
             <label>
              <Field name="cantidad" placeholder="cantidad" />
              <ErrorMessage component="p" name="cantidad" />
              </label>
            
              <label>
              <input type="file" name="image"
                onChange={(evento)=>setFieldValue("image",evento.target.files)}
              />

              </label>

              <button type="submit">Crear Producto</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ProductForm;

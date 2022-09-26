import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import * as Yup from "yup";
import { Form, Formik, Field,  } from "formik";

const initForm = {
  nombre: "",
  descripcion: "",
  precio: "",
  cantidad: "",
  image: {
    public_id: null,
    secure_url: null,
  },
};

const Formulario = () => {
  const { crearProducto } = useContext(ProductContext);

  return (
    <>
      <div>
        formulario titulo
        <h1>Social Profiles</h1>
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

            console.log(values);
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="nombre" placeholder="Nombre" />

              <Field name="descripcion" placeholder="Descripcion" />

              <Field name="precio" placeholder="Precio" />
              <Field name="cantidad" placeholder="Cantidad" />
              <input
                type="file"
                name="image"
                onChange={(evento) =>
                  setFieldValue("image", evento.target.files[0])
                }
              />

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Formulario;

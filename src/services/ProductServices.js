import axios from "axios";

export const obtenerProductosService = async () => {
  const resp = await axios.get(
    "https://backecomerce.onrender.com/api/products",
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return resp.data;
};
/* A function that is being exported. */

export const crearProductoservices = async (formulario) => {
  const form = new FormData();
  for (let key in formulario) {
    form.append(key, formulario[key]);
  }
  const resp = await axios.post(
    "https://backecomerce.onrender.com/api/products",
    formulario,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return resp.data;
};

export const unProductoServices = async (id) => {
  const resp = await axios.get(
    `https://backecomerce.onrender.com/api/products/${id}`,
    {
      header: {
        "auth-token ": localStorage.getItem("token"),
      },
    }
  );

  return resp.data;
};

export const actulizarProductoServices = async (id, formulario) => {
  const form = new FormData();

  for (let key in formulario) {
    form.append(key, formulario[key]);
  }
  const resp = await axios.post(
    `https://backecomerce.onrender.com/api/products/${id}`,
    formulario,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(resp.data);
  return resp.data;
};

export const eliminarProcutosservices = async (id) => {
  const resp = await axios.delete(
    `https://backecomerce.onrender.com/api/products/${id}`,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );

  return resp.data;
};

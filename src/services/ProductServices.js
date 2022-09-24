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

export const crearProductoservices = async (formulario) => {
  const resp = await axios.post(
    "https://backecomerce.onrender.com/api/products",
    formulario,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return resp.data;
};

export const unProductoServices = async (id) => {
  const resp = await axios.get(
    `https://backecomerce.onrender.com/api/products/ ${id}`,
    {
      header: {
        "auth-token ": localStorage.getItem("token"),
      },
    }
  );
};

export const actulizarProductoServices = async (id, formulario) => {
  const resp = await axios.post(
    `https://backecomerce.onrender.com/api/products/ ${id}`,
    formulario,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return resp.data;
};

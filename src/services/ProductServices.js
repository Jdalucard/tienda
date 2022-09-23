import axios from "axios";


export const obtenerProductosService = async (id) => {
  const resp = await axios.get("https://backecomerce.onrender.com/api/products", {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });

  return resp.data;
};
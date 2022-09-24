import axios from "axios";

export const loginServices = async (formulario) => {
  const resp = await axios.post(
    "https://backecomerce.onrender.com/api/auth/login",
    formulario
  );
  console.log(resp)
  return resp.data;
};

export const singUpServices = async (formulario) => {
  const resp = await axios.post(
    "https://backecomerce.onrender.com/api/auth",
    formulario
  );
  return resp.data;
};

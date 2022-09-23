import React, { createContext, useState } from "react";

import { loginServices, singUpServices } from "../services/authServices";

export const AuthContext = createContext({});

const initialState = {
  id: null,
  nombre: null,
  contraseña: null,
  correo: null,
};

export const AuthProvider = ({ children }) => {
  const [autenticar, setautenticar] = useState(initialState);

  const login = async (formulario) => {
    const data = await loginServices(formulario);
    setautenticar({
      id: data.datos.id,
      nombre: data.datos.nombre,
      contraseña: data.datos.contraseña,
      correo: data.datos.correo,
    });
    localStorage.setItem("token", data.token);
  };

  const singup = async (formulario) => {
    const data = await singUpServices(formulario);
    setautenticar({
      id: data.datos.id,
      nombre: data.datos.nombre,
      contraseña: data.datos.contraseña,
      correo: data.datos.correo,
    });

    localStorage.setItem("token", data.token);
  };

  return (
    <AuthContext.Provider value={{ autenticar, login, singup }}>
      {children}
    </AuthContext.Provider>
  );
};

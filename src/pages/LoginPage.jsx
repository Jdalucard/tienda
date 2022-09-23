import React, { useState, useContext } from "react";
import Titulos from "../components/Titulos";
import { AuthContext } from "../context/AuthContext";
import style from './style.module.scss'



const initForm = {
  nombre:"",
  contraseña:"",
};

const LoginPage = () => {
  const [formulario, setformulario] = useState(initForm);
  const { login, autenticar } = useContext(AuthContext);

  const handleForm = async (evento) => {
    evento.preventDefault();

    await login(formulario);
  };

  const actualizo = (e) => {
    setformulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formulario)
  return (
    <>


<form className={style.login} onSubmit={handleForm}>
<Titulos titulo="Pagina de logeo" />
<p>{autenticar.id}</p>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre de Usuario</label>
    <input
                type="text"
                className="form-control"
                id="inputUsername"
                onChange={actualizo}
                value={formulario.nombre}
                name="nombre"
              />

  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    <input
                type="password"
                className="form-control"
                id="inputPassword"
                onChange={actualizo}
                value={formulario.contraseña}
                name="contraseña"
              />

  </div>
 
  <button type="submit" className="btn btn-dark">Enviar</button>
</form>

     
    </>
  );
};

export default LoginPage;

import React,{useState,useContext} from 'react'
import Titulos from '../components/Titulos'
import { AuthContext } from '../context/AuthContext'
import style from './style.module.scss'

const InitForm={
  correo:"",
  nombre:"",
  contraseña:"",
 
}
const SingUpPage = () => {
  const [formulario,setFomulario]=useState(InitForm)
  const {singup,autenticar}=useContext(AuthContext)

const handleForm= async(evento)=>{
  evento.preventDefault()
  await singup(formulario)
}

const actualizo=(evento)=>{
  setFomulario({
    ...formulario,
    [evento.target.name]: evento.target.value,
})
} 
  return (
    <>
  
<form className={style.singup} onSubmit={handleForm}>
<Titulos titulo="Registro" />
  <div className="mb-3">
  <p>{autenticar.id}</p>
    <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required 
  onChange={actualizo}
  value={formulario.correo}
  name="correo"
    />

  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputext" className="form-label">Nombre de Usuario</label>
    <input type="text" className="form-control" id="exampleInputext" aria-describedby="emailHelp" required
    
    onChange={actualizo}
    value={formulario.nombre}
    name="nombre"


    />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  required
        name="contraseña"
        value={formulario.contraseña}
        onChange={actualizo}
         />
    

  </div>
 
  <button type="submit" className="btn btn-dark">Enviar</button>
</form>

    
    
    </>
  )
}

export default SingUpPage
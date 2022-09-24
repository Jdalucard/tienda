import React, {  useContext , useState } from 'react'
import  ProductContext from '../context/ProductContext' 
import Titulos from "../components/Titulos"

const initForm={
  nombre:"",
  descripcion:"",
  precio:"",
  cantidad:"",
    image: null,
}

const ProductForm = () => {
const [formulario, setformulario]=useState(initForm)
const {crearProducto}=useContext(ProductContext)  

const handleForm=async(evento)=>{
  evento.preventDefault()
  await crearProducto(formulario);  
 console.log(formulario)

  setformulario(initForm)
}

const actualizar=(evento)=>{
  setformulario({
    ...formulario,
    [evento.target.name]: evento.target.value
  })

}

  return (
    
    <>

  <div>
    
  <Titulos titulo={"Pagina de los productos"}></Titulos>
  {({setfieValue})=>{    }} 
  <form className="w-100" onSubmit={handleForm}>
  
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          name="nombre"
          value={formulario.nombre}
          onChange={actualizar}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputDescription" className="form-label">
          Descripcion
        </label>
        <input
          type="text"
          name="descripcion"
          className="form-control"
          id="inputDescription"
          value={formulario.descripcion}
          onChange={actualizar}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPrice" className="form-label">
          Precio
        </label>
        <input
          type="number"
          name="precio"
          className="form-control"
          id="inputPrice"
          value={formulario.precio}
          onChange={actualizar}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPrice" className="form-label">
     Cantidad
        </label>
        <input
          type="number"
          name="cantidad"
          className="form-control"
          id="inputPrice"
          value={formulario.cantidad}
          onChange={actualizar}
        />
      </div>
       <div className="mb-3">
        <label htmlFor="inputPrice" className="form-label">
        Subir Imagen
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          name='image'
          onChange={(evento)=>console.log("image",evento.target.files[0])}
        
        />
      </div> 
      <div className="mb-3 text-end">
        <button type="submit" className="btn btn-success">
          Crear Producto
        </button>
      </div>
    </form> 

</div>




    </>
  )
}

export default ProductForm
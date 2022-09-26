import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import Titulos from "./Titulos";
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
const ProductFormEdit = () => {
  const [formulario, setformulario] = useState(initForm);
  const { product, actulizarProducto } = useContext(ProductContext);
  const handleForm = async (evento) => {
    evento.preventDefault();
    await actulizarProducto(formulario.id, formulario);
  };
  const actualizar = (evento) => {
    setformulario({
      ...formulario,
      [evento.target.name]: evento.target.value,
    });
  };
useEffect(()=>{
  setformulario(product)
},[product])
  return (<>
    
    <Titulos titulo={"Editar los productos"}></Titulos>
<form className="w-100" onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="inputID" className="form-label">
          ID
        </label>
        <input
          type="text"
          className="form-control-plaintext"
          id="inputID"
          name="id"
          value={formulario.id}
          onChange={actualizar}
    
        />
      </div>
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
          type="nomber"
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
        <button type="submit" className="btn btn-warning">
          Actualizar
        </button>
      </div>
    </form>
  </>)
};
export default ProductFormEdit;
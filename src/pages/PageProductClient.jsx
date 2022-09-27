import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";

import { useParams } from "react-router-dom";

const PageProductClient = () => {
  const { id } = useParams();
  const { unProducto, product } = useContext(ProductContext);

  console.log(product);

  useEffect(() => {
    unProducto(id);
  }, [id, unProducto]);
  return (
    <>

      <div className="container d-flex justify-content-evenly ">
      <div className=" ">
        <main className="row pt-2">
          <article className="col-md-6"></article>
          <article className="col-md-8 mt-5">
           
            <div className="card m-5" style={{ width: "18rem" }}>
              {product.image && (
                <img alt={product.nombre} src={product.image.secure_url} />
              )}
              <div className="card-body">
                <p className="card-text">{product.id}</p>
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripcion}</p>
                <p className="card-text">{product.precio}</p>
                <p className="card-text">{product.cantidad}</p>      
                <div>
                  <button className="btn btn-info  p-2 ms-5 text-center ">Agregar al carro </button>
                </div> 
              </div>
               
            </div>   
          </article>
        </main>

       
      </div>


      <div class="accordion p-5 mt-5" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default PageProductClient;

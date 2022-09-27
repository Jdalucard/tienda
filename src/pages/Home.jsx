import React from 'react'
/* import Tienda from '../components/Tienda' */

import  Cart from '../components/Cart/Cart'
import ProductList from '../components/ProductList'
import IndexProducts from '../components/Products/IndexProducts'
import style from './style.module.scss'


const Home = () => {
  return (
    <>
<div className={style.home}>
    <Cart/>
     <IndexProducts/> 
    <ProductList />
   
    </div>


  {/*  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('../Img/Banner/2.png')} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={require('../Img/Banner/3.png')} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={require('../Img/Banner/4.png')} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
 */}


     {/*  <Tienda/> */}
    
      </>
  )
}

export default Home
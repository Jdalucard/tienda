import React from 'react'
import ProductsData from '../../data/Productsdata'

import styles from './style.module.scss'

const IndexProducts = () => {
 
  return (
    <>
    <div className={styles.productsContainer}>
  
    {ProductsData.map((product,indice)=>(

      <div key={indice} className={styles.product}>
          <img src={product.img} alt={product.name}/>
          <div>
            <p>
              {product.name} -${product.price}
            </p>
          </div>
          <button onClick={()=>console.log(product)}> Agregar al carro</button>
      </div>
     
      ))} 
    </div>
    </>
  )
}

export default IndexProducts
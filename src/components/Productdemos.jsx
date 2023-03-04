import React from "react";
import image from "./IMG/info3.jpeg";
import image2 from "./IMG/post3.jpeg";
import image3 from "./IMG/post5.jpeg";
import image4 from "./IMG/post6.jpeg";
import styles from "./styles.scss/styles.module.scss";
import { NavLink } from "react-router-dom";

const Productdemos = () => {
  return (
    <div className={styles.contenedorLista}>
      <div className={styles.first}>
        <div className={styles.card} style={{ width: "20rem" }}>
          <img src={image} className={styles.img} alt="albun de discos" />
          <div className={styles.bodyCard}>
            <h5 className="card-title">Nombre del producto </h5>
            <hr />
            <p className="card-text">Descripcion</p>
            <p className="card-text">Precio</p>
            <p className="card-text">Cantidad</p>
            <div className="container">
              <NavLink to="#" className="btn btn-success ms-3 mb-3  ">
                Comprar
              </NavLink>
            </div>
          </div>
        </div>
        {/* segunda */}
        <div className={styles.card} style={{ width: "20rem" }}>
          <img src={image2} className={styles.img} alt="albun de discos" />
          <div className={styles.bodyCard}>
            <h5 className="card-title">Nombre del producto </h5>
            <hr />
            <p className="card-text">Descripcion</p>
            <p className="card-text">Precio</p>
            <p className="card-text">Cantidad</p>
            <div className="container">
              <NavLink to="#" className="btn btn-success ms-3 mb-3  ">
                Comprar
              </NavLink>
            </div>
          </div>
        </div>
        {/* tercera */}
        <div className={styles.card} style={{ width: "20rem" }}>
          <img src={image3} className={styles.img} alt="albun de discos" />
          <div className={styles.bodyCard}>
            <h5 className="card-title">Nombre del producto </h5>
            <hr />
            <p className="card-text">Descripcion</p>
            <p className="card-text">Precio</p>
            <p className="card-text">Cantidad</p>
            <div className="container">
              <NavLink to="#" className="btn btn-success ms-3 mb-3  ">
                Comprar
              </NavLink>
            </div>
          </div>
        </div>
        {/* cuarta  */}
        <div className={styles.card} style={{ width: "20rem" }}>
          <img src={image4} className={styles.img} alt="albun de discos" />
          <div className={styles.bodyCard}>
            <h5 className="card-title">Nombre del producto </h5>
            <hr />
            <p className="card-text">Descripcion</p>
            <p className="card-text">Precio</p>
            <p className="card-text">Cantidad</p>
            <div className="container">
              <NavLink to="#" className="btn btn-success ms-3 mb-3  ">
                Comprar
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdemos;

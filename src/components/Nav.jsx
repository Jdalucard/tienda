import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
          Tu Logo aqui
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Tu Logo aqui
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/products"
                  >
                    Producto
                  </NavLink>
                </li>
           
                <li className="nav-item">
                  <NavLink className="navbar-brand" to="/SingUp">
                  Registrate
                  </NavLink>
                </li>
               
                <li className="nav-item">
                  <NavLink className="navbar-brand" to="/PageProductClient">
                 Producto Cliente
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink className="navbar-brand" to="/CartPage">
                
                  Carrito
                  </NavLink>
                </li>
             
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

import React from "react";
import { BrowserRouter as Router,Routes, Route,Navigate } from "react-router-dom";

import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Nav from "../components/Nav";
import Tienda from "../components/Tienda";
import SingUpPage from "../pages/SingUpPage";
import Productspage from "../pages/ProductPage";
import PageProduct from "../pages/PageProduct"


const Rutas = () => {
  return (
    <>
 <Router>
 <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/SingUp" element ={<SingUpPage/>}/>
          <Route path="/Tienda" element={<Tienda/>}/>
          <Route path="/products" element={<Productspage/>}/>
          <Route path="/products/:id" element={<PageProduct/>}/>


          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
</Router>
    </>
  );
};

export default Rutas;

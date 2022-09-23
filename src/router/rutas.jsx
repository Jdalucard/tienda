import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Nav from "../components/Nav";
import Tienda from "../components/Tienda";
import SingUpPage from "../pages/SingUpPage";


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


       
        </Routes>
</Router>
    </>
  );
};

export default Rutas;

import Rutas from "./router/rutas";
import  {CartProvider} from './context/CartContext'
import {AuthProvider} from "./context/AuthContext"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/styles.css"; 



function App() {
  return (
    <>
<AuthProvider>
    <CartProvider>
      <Rutas/>
      </CartProvider>
</AuthProvider>
     
    </>
  );
}

export default App;

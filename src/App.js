import Rutas from "./router/rutas";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/styles.css"; 

import  {CartProvider} from './context/CartContext'

function App() {
  return (
    <>

    <CartProvider>
      <Rutas/>
      </CartProvider>
     
    </>
  );
}

export default App;

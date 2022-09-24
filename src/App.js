import Rutas from "./router/rutas";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/styles.css";
import Productstate from "./context/ProductState";

function App() {
  return (
    <>
      <AuthProvider>
        <Productstate>
          <CartProvider>
            <Rutas />
          </CartProvider>
        </Productstate>
      </AuthProvider>
    </>
  );
}

export default App;

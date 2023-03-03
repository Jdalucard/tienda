import Rutas from "./router/rutas";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/styles.css";
import Productstate from "./context/ProductState";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <>
      <AuthProvider>
        <PayPalScriptProvider
          options={{
            "client-id":
              "ARXhTgKjy8pJP0z4VY2Clo730JhZtRdjNyGoVizEZGgDf6gUYWQoqM_uDmC1U2qF_P3kLQDuCALCuxgV",
          }}
        >
          <Productstate>
            <CartProvider>
              <Rutas />
            </CartProvider>
          </Productstate>
        </PayPalScriptProvider>
      </AuthProvider>
    </>
  );
}

export default App;

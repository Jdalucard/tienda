import React, { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import CartList from "../components/CartList";
import PaypalCheckoutButton from "../pages/PagePaypal";


const CartPage = () => {
  const { cart } = useContext(ProductContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, producto) => acc + producto.precio, 0));
  }, [cart]);

  return (
    <>
      <main className="row pt-5">
        <article className="col-md-12">
          <CartList />
        </article>
      </main>

      {cart.length > 0 ? (
        <>
          <section className="row pt-5">
            <article className="col-md-12">
              <h2 className="container md-4">Su total a pagar es {total}</h2>
            </article>
          </section>
          <section className="row">
            <article className="col">
              <PaypalCheckoutButton
                currency={"USD"}
                amount={total}
                showSpinner={false}
              />
            </article>
          </section>
        </>
      ) : (
        <section className="row">
          <article className="col">
            <h2>No hay productos en el carrito</h2>
          </article>
        </section>
      )}
    </>
  );
};

export default CartPage;

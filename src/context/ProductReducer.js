const reducer = (productosGlobales, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      return {
        ...productosGlobales,
        products: action.payload,
      };

    case "UN_PRODUCTO":
      return {
        ...productosGlobales,
        product: action.payload,
      };

      case "AGREGAR_PRODUCTO_CARRITO":
        return {
          ...productosGlobales,
          cart: [...productosGlobales.cart, action.payload],
        };
        case "ELIMINAR_PRODUCTO_CARRITO":
          return {
            ...productosGlobales,
            cart: productosGlobales.cart.filter(
              (producto) => producto.id !== action.payload
            ),
          };
  
    default:
      return productosGlobales;
  }
};
export default reducer;

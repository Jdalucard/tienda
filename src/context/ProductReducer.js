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

    default:
      return productosGlobales;
  }
};
export default reducer;

const reducer = (productosGlobales, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      return {
        ...productosGlobales,
        products: action.payload,
      };

    default:
      return productosGlobales;
  }
};
export default reducer;

export function getProductsByIds(products, idsList) {
  const selectedProducts = [];

  for (let index = 0; index < idsList.length; index++) {
    products.map((product) => {
      if (idsList[index] === product?.id + "") {
        selectedProducts.push(product);
      }
    });
  }

  return selectedProducts;
}

export function getSortedProducts(productList) {
  const sortedProducts = productList
    .map((product) => {
      if (
        !product.images[0] ||
        !product.images[0].startsWith("https") ||
        !product.price ||
        !product.title
      )
        return null;

      return product;
    })
    .filter((product) => product);

  return sortedProducts;
}

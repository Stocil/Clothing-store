import { getPriceWithSale } from "./getPriceWithSale";

export function getSale(array) {
  const salesNumber = Math.floor(Math.round(array.length / 3));
  let salesIndex = [];

  for (let index = 0; index < salesNumber; index++) {
    salesIndex.push(Math.round(Math.random() * (array.length - 1)));
  }

  const arrayWithSales = array.map((product, index) => {
    if (salesIndex.includes(index)) {
      const sale = Math.round(Math.random() * 25) + 5;
      return {
        ...product,
        sale: sale,
        newPrice: getPriceWithSale(product.price, sale),
      };
    }

    return product;
  });

  return arrayWithSales;
}

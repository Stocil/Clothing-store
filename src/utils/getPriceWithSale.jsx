export function getPriceWithSale(oldPrice, sale) {
  return Math.floor(oldPrice - (oldPrice / 100) * sale);
}

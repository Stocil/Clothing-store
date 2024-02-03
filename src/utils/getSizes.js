export function getSizes(category) {
  if (category === "Clothes") {
    return ["S", "M", "L", "XL", "XXL"];
  }

  if (category === "Shoes") {
    return ["36", "37", "38", "39", "40"];
  }

  return null;
}

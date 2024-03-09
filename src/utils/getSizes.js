export function getSizes(category) {
  if (category === 1) {
    return ["S", "M", "L", "XL", "XXL"];
  }

  if (category === 4) {
    return ["36", "37", "38", "39", "40"];
  }

  return null;
}

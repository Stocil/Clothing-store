export function getSizes(category) {
  if (category?.toLowerCase() === "clothes") {
    return ["S", "M", "L", "XL", "XXL"];
  }

  if (category?.toLowerCase() === "shoes") {
    return ["36", "37", "38", "39", "40"];
  }

  return null;
}

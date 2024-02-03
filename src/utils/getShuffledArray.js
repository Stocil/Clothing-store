export function getShuffledArray(array) {
  const selectedIndexesArray = [];
  const selectedIndexes = new Set([]);

  for (let index = 0; index < array.length; index++) {
    selectedIndexes.add(Math.round(Math.random() * (array.length - 1)));
  }

  selectedIndexes.forEach((value) => {
    selectedIndexesArray.push(value);
  });

  const shuffledArray = array
    .map((product, index) => {
      if (selectedIndexesArray.includes(index)) return product;
    })
    .filter((product) => product);

  return shuffledArray;
}

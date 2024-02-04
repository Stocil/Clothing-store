export function getShuffledArray(array) {
  const selectedIndexesArray = [];
  const selectedIndexes = new Set([]);
  const shuffledArray = [];

  for (let index = 0; index < array.length; index++) {
    selectedIndexes.add(Math.round(Math.random() * (array.length - 1)));
  }

  selectedIndexes.forEach((value) => {
    selectedIndexesArray.push(value);
  });

  selectedIndexes.forEach((product) => {
    if (selectedIndexesArray.includes(product)) {
      shuffledArray.push(array[product]);
    }
  });

  return shuffledArray;
}

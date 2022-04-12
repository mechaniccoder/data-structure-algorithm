const array = [1, 3, 5, 6, 7, 9, 11, 20, 30];

function searchBinaryRecursive(array: number[], item: number): number {
  const middle = (array.length - 1) / 2;
  const middleIdx = Math.floor(middle);

  if (array[middleIdx] === item) return middleIdx;

  if (array[middleIdx] < item) {
    return (
      searchBinaryRecursive(array.slice(middleIdx + 1), item) + middleIdx + 1
    );
  } else if (array[middleIdx] > item)
    return searchBinaryRecursive(array.slice(0, middleIdx), item);

  return -1;
}

console.log(searchBinaryRecursive(array, 29));

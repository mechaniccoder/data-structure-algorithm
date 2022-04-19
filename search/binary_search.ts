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

function searchBinaryIterate(
  list: number[],
  key: number,
  low: number,
  high: number
) {
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (key === list[middle]) return middle;
    else if (key < list[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return -1;
}

console.log(searchBinaryIterate(array, 30, 0, array.length - 1));

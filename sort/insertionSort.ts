function insertionSort(array: number[]) {
  let j;

  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = current;
  }

  return array;
}

const sortedArray = insertionSort([5, 3, 8, 1, 2, 7]);

sortedArray;

export {};

function selectionSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const sortedArray = selectionSort([5, 3, 8, 1, 2, 7]);
sortedArray;

export {};

function heapify(array: number[], size: number, index: number) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < size && array[left] > array[largest]) {
    largest = left;
  }

  if (right < size && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    heapify(array, size, largest);
  }
}

function heapSort(array: number[]) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  for (let j = array.length - 1; j >= 0; j--) {
    [array[0], array[j]] = [array[j], array[0]];

    heapify(array, j, 0);
  }

  return array;
}

const result = heapSort([12, 11, 13, 5, 6, 7]);

console.log(result);

export {};

function quickSort(array: number[], left = 0, right = array.length - 1) {
  if (left < right) {
    const p = partition(array, left, right);

    quickSort(array, left, p - 1);
    quickSort(array, p + 1, right);
  }

  return array;
}

function partition(array: number[], left: number, right: number) {
  let pivot = array[left];
  let low = left + 1;
  let high = right;

  while (low < high) {
    while (array[low] < pivot) {
      low++;
    }

    while (pivot < array[high]) {
      high--;
    }

    if (low < high) {
      [array[low], array[high]] = [array[high], array[low]];
    }
  }

  [array[high], array[left]] = [array[left], array[high]];

  return high;
}

function test() {
  const array1 = [5, 1, 3, 2, 4, 9, 6];
  const result1 = quickSort(array1);

  console.log(result1);

  const array2 = [6, 5, 4, 3, 2, 1];
  const result2 = quickSort(array2);

  console.log(result2);
}

test();

export {};

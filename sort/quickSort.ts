const array = [];

function partition(array: Array<number>, left: number, right: number) {
  let pivot = array[left];
  let low = left + 1;
  let high = right;
  let temp = 0;

  while (low < high) {
    while (array[low] < pivot) {
      console.log(low);
      low++;
    }

    while (array[high] > pivot) {
      console.log(high);
      high--;
    }

    if (low < high) {
      temp = array[low];
      console.log(temp);
      array[low] = array[high];
      array[high] = temp;
    }

    console.log(low, high);
  }

  console.log(array[high]);
  temp = array[high];
  array[high] = pivot;
  array[left] = temp;

  console.log(array);

  return high;
}

function quick_sort(array: Array<number>, left: number, right: number) {
  if (left < right) {
    const q = partition(array, left, right);
    quick_sort(array, left, q - 1);
    quick_sort(array, q + 1, right);
  }
}

function main() {
  const unsortedArray = [1, 3, 9, 7];

  quick_sort(unsortedArray, 0, unsortedArray.length - 1);

  for (let i = 0; i < unsortedArray.length; i++) {
    console.log(unsortedArray[i]);
  }
}

main();

export {};

// best case - O(nlog(n)) partitioning half everytime
// worst case - O(n^2) partitioning unbalance everytime

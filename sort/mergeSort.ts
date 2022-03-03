const sorted: number[] = [];
const newArray = [27, 10, 12, 20, 25, 13, 15, 22];

function mergeSort(array: number[], left: number, right: number) {
  const mid = Math.floor((left + right) / 2);

  if (left < right) {
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
    console.log(`left: ${left} || mid: ${mid} || right: ${right}`);
    console.log(sorted);
  }
}

function merge(array: number[], left: number, mid: number, right: number) {
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (array[i] <= array[j]) {
      sorted[k++] = array[i++];
    } else {
      sorted[k++] = array[j++];
    }
  }

  if (i > mid) {
    for (let l = j; l <= right; l++) {
      sorted[k++] = array[l];
    }
  } else {
    for (let l = i; l <= mid; l++) {
      sorted[k++] = array[l];
    }
  }

  for (let l = left; l <= right; l++) {
    array[l] = sorted[l];
  }
}

function main() {
  mergeSort(newArray, 0, 7);

  console.log(sorted);
}

main();

// wortst case - O(nlog(n)) compare every element
// best case - - O(nlog(n)) compare half of element
// very stable algorithm

const indexTable = [
  { key: 3, index: 0 },
  { key: 22, index: 3 },
  { key: 67, index: 6 },
];

function searchIndex(key: number, n: number) {
  if (key < indexTable[0].key || indexTable[indexTable.length - 1].key < key)
    return -1;

  let i, low, high;

  for (i = 0; i < indexTable.length; i++) {
    if (indexTable[i].key <= key && key < indexTable[i].key) break;
  }

  if (i === indexTable.length) {
    low = indexTable[indexTable.length - 1].index;
    high = n - 1;
  } else {
    low = indexTable[i].index;
    high = indexTable[i + 1].index;
  }

  searchBinaryIterate([], key, low, high);
}

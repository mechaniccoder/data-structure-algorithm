const indexTable = [
  { key: 3, index: 0 },
  { key: 22, index: 3 },
  { key: 67, index: 6 },
];

/**
 * main data를 가지고 있는 테이블에서 데이터를 가져와서 인덱스와 데이터정보를 가지고 있는 index table을 생성한다.
 * 그럼 찾고자 하는 데이터가 어느 인덱스 사이에 있는지를 알 수 있고, 그 사이에 대해서만 binary search 하면 되기때문에
 * 더 빠르게 검색을 할 수 있다.
 * 데이터베이스 여러 분야에서 사용 된다.
 */
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

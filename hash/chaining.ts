const TABLE_SIZE = 10;

const hashTable = Array(TABLE_SIZE).fill(null);

function hashFunction(key: number) {
  return key % TABLE_SIZE;
}

function hashAdd(item: number) {
  const hashValue = hashFunction(item);
  const node = hashTable[hashValue];
  let nodeBefore;
  let ptr = node;
  while (ptr) {
    if (ptr.value === item) {
      console.log("키가 중복됐습니다.");
      throw new Error("Duplicated");
    }

    nodeBefore = ptr;
    ptr = ptr.next;
  }

  if (node === null) {
    hashTable[hashValue] = { value: item, next: null };
  } else {
    nodeBefore.next = { value: item, next: null };
  }
}

export {};

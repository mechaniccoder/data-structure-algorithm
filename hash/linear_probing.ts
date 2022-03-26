const hashTableSize = 13;

const hashTable: (string | number)[] = Array(hashTableSize).fill(null);

function hashFun(str: string) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i);
  }

  result %= hashTableSize;
  return Math.floor(result);
}

function addToHashTable(item: { key: string; value: string | number }) {
  const hashAddr = hashFun(item.key);

  let i = hashAddr;
  while (hashTable[i] !== null) {
    if (hashTable[i] === item.value) {
      throw new Error("Duplicated item");
    }

    i = (i + 1) % hashTableSize;
    if (i === hashAddr) {
      throw new Error("Hash table full");
    }
  }

  hashTable[i] = item.value;
}

const a = addToHashTable({ key: "hi", value: 1 });

function hashSearch(item: { key: string; value: number }) {
  const hashAddr = hashFun(item.key);

  let i = hashAddr;
  while (hashTable[i]) {
    if (hashTable[i] === item.value) {
      return hashTable[i];
    }

    i = (i + 1) % hashTableSize;

    if (hashAddr === i) {
      return console.log("value not exist");
    }
  }

  return console.log("Value not exists");
}

function printHashTable() {
  console.log("==================");
  for (let i = 0; i < hashTable.length; i++) {
    console.log(`[${i}] ${hashTable[i]}`);
  }
}

function main() {
  const tokens = ["do", "for", "if", "case", "else", "return", "function"];

  for (let i = 0; i < tokens.length; i++) {
    const item = { key: tokens[i], value: tokens[i] };
    addToHashTable(item);
  }

  printHashTable();
}

main();

class Queue {
  store: number[];

  constructor() {
    this.store = [];
  }

  enqueue(data: number) {
    this.store.push(data);
  }

  dequeue() {
    return this.store.shift();
  }

  isEmpty() {
    return this.store.length < 1;
  }
}

function radixSort(array: number[]) {
  const queues: Queue[] = Array(10)
    .fill(0)
    .map(() => new Queue());
  let factor = 1;

  const digit = array[0].toString().length;

  for (let i = 0; i < digit; i++) {
    array.forEach((ele) => {
      const remain = Math.floor(ele / factor) % 10;
      queues[remain].enqueue(ele);
    });

    const list: number[] = [];

    queues.forEach((queue) => {
      while (!queue.isEmpty()) {
        list.push(queue.dequeue()!);
      }
    });

    array = list;

    factor *= 10;
  }

  return array;
}

const result = radixSort([38, 71, 22, 81, 76, 89, 94, 98, 87]);

console.log(result);

export {};

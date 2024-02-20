interface PriorityQueue {
  insert(data: number): void;
  delete(): void;
  peek(): void;
}

class Heap implements PriorityQueue {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  insert(data: number) {
    this.heap.push(data);
    this.#bubbleUp();
    this.print();
  }

  #bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex;

    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] <= this.heap[parentIndex]) break;

      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];

      index = parentIndex;
    }
  }

  delete() {
    if (this.heap.length === 0) return;

    const result = this.heap[0];

    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.#bubbleDown();
    this.print();

    return result;
  }

  #leftChildIndex(index: number) {
    return 2 * (index + 1) - 1;
  }

  #rightChildIndex(index: number) {
    return 2 * (index + 1);
  }

  #bubbleDown() {
    let index = 0;
    const size = this.heap.length;

    while (this.#leftChildIndex(index) < size) {
      const leftChildIndex = this.#leftChildIndex(index);
      const rightChildIndex = this.#rightChildIndex(index);

      let maxChildIndex;

      if (rightChildIndex >= size) {
        maxChildIndex = leftChildIndex;
      }

      maxChildIndex =
        this.heap[leftChildIndex] >= this.heap[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;

      if (this.heap[index] >= this.heap[maxChildIndex]) break;

      [this.heap[index], this.heap[maxChildIndex]] = [
        this.heap[maxChildIndex],
        this.heap[index],
      ];

      index = maxChildIndex;
    }
  }

  peek() {
    this.print();
    return this.heap[0];
  }

  print() {
    console.log(this.heap);
  }
}

function test() {
  const heap = new Heap();

  heap.insert(3);
  heap.insert(2);
  heap.insert(5);
  heap.insert(11);
  heap.delete();
  heap.insert(15);
  heap.delete();
  heap.insert(13);
}

test();

interface PriorityQueue {
  insert(data: number): void;
  delete(): void;
  peek(): void;
}

class Heap implements PriorityQueue {
  heap: number[];

  constructor(array: number[]) {
    this.heap = [];

    array.forEach((element) => {
      this.insert(element);
    });
  }

  static heapify(array: number[]) {
    return new Heap(array);
  }

  insert(data: number) {
    this.heap.push(data);
    this.#bubbleUp();
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
      } else {
        maxChildIndex =
          this.heap[leftChildIndex] >= this.heap[rightChildIndex]
            ? leftChildIndex
            : rightChildIndex;
      }

      if (this.heap[index] >= this.heap[maxChildIndex]) break;

      [this.heap[index], this.heap[maxChildIndex]] = [
        this.heap[maxChildIndex],
        this.heap[index],
      ];

      index = maxChildIndex;
    }
  }

  peek() {
    return this.heap[0];
  }
}

function heapSort(array: number[]) {
  const heap = Heap.heapify(array);

  const result = [];

  while (heap.peek()) {
    result.push(heap.delete());
  }

  return result;
}

heapSort([3, 2, 1, 5, 4]);

export {};

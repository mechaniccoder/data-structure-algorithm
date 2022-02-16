class Queue {
  private data: Node[];

  constructor() {
    this.data = [];
  }

  public enqueue(arg: Node) {
    this.data.push(arg);
  }

  public dequeue() {
    return this.data.shift();
  }

  public isEmpty() {
    return this.data.length < 1;
  }
}

type Node = [number, Node | null, Node | null];

const n1: Node = [1, null, null];
const n2: Node = [4, n1, null];
const n3: Node = [16, null, null];
const n4: Node = [25, null, null];
const n5: Node = [20, n3, n4];
const n6: Node = [15, n2, n5];
const root = n6;

function levelOrder(root: Node | null) {
  if (root === null) return;

  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const top = queue.dequeue();
    if (!top) break;

    console.log(top[0]);

    if (top[1]) queue.enqueue(top[1]);
    if (top[2]) queue.enqueue(top[2]);
  }
}

levelOrder(root);

export {};

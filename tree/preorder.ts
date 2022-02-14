type Node = [number, Node | null, Node | null];

const n1: Node = [1, null, null];
const n2: Node = [4, n1, null];
const n3: Node = [16, null, null];
const n4: Node = [25, null, null];
const n5: Node = [20, n3, n4];
const n6: Node = [15, n2, n5];
const root = n6;

namespace Recursion {
  function preorder(root: Node | null) {
    if (root !== null) {
      console.log(root[0]);
      preorder(root[1]);
      preorder(root[2]);
    }
  }

  function inorder(root: Node | null) {
    if (root !== null) {
      inorder(root[1]);
      console.log(root[0]);
      inorder(root[2]);
    }
  }

  function postorder(root: Node | null) {
    if (root !== null) {
      postorder(root[1]);
      postorder(root[2]);
      console.log(root[0]);
    }
  }

  preorder(root);
  inorder(root);
  postorder(root);
}

namespace Iteration {
  const stack: Node[] = [];

  function preorder(root: Node | null) {
    if (root === null) return;

    stack.push(root);

    while (stack.length) {
      const top = stack.pop();
      if (!top) break;

      console.log(top[0]);

      if (top[2]) stack.push(top[2]);
      if (top[1]) stack.push(top[1]);
    }
  }

  function inorder(root: Node | null) {
    while (1) {
      for (; root; root = root[1]) {
        stack.push(root);
      }

      const top = stack.pop();
      if (!top) break;

      console.log(top[0]);
      root = top[2];
    }
  }

  function postorder(root: Node | null) {
    if (root === null) return;

    const out = [];

    stack.push(root);

    while (stack.length) {
      const top = stack.pop();
      if (!top) break;

      out.push(top[0]);

      if (top[1]) stack.push(top[1]);

      if (top[2]) stack.push(top[2]);
    }

    while (out.length) {
      console.log(out.pop());
    }
  }

  preorder(root);
  inorder(root);
  postorder(root);
}

export {};

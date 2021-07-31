#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
  int data;
  struct TreeNode left;
  struct TreeNode right;
} TreeNode;

TreeNode* create_node(int data) {
  TreeNode* new_node = (TreeNode*)malloc(sizeof(TreeNode));
  new_node->data = data;
  new_node->left = NULL;
  new_node->right = NULL;
  return new_node;
}

// 순환을 활용한 search 알고리즘
TreeNode* search_recursion(TreeNode *node, int data) {
  if (node == NULL) return NULL;
  if (node->data == data) return node;
  if (node->data < data) { 
    return search(node->right, data)
  } else {
    return search(node->left, data);
  }
}

// 반복을 활용한 search 알고리즘
TreeNode* search_interation(TreeNode *node, int data) {
  while(node != NULL) {
    if (node->data == data) return node;
    if (node->data > data) {
      node = node->left;
    } else {
      node = node->right;
    }
  }
  return NULL;
}

// 삽입 
TreeNode* insert_recursion(TreeNode *node, int data) {
  if (node == NULL) return create_node(data);

  /**
   * 단말노드인 경우 메모리를 할당해서 새로운 노드를 만든 후에 포인터로 연결한다.
   * 그렇지 않은경우 insert_recursion은 node를 반환하므로 기존에 연결된 포인터를 유지한다.
  **/
  if (data < node->data) {
    node->left = insert_recursion(node->left, data); 
  } else if (data > node->data) {
    node->right = insert_recursion(node->right, data);
  }

  return node;
}

/**
 * 삭제 연산을 할 경우는 여러가지 케이스에 대해서 생각해야 한다.
 * 1. 단말 노드를 삭제하려는 경우
 * -> 부모 노드의 포인터를 NULL로 만든다.
 * 
 * 2. 삭제하려는 노드가 하나의 서브트리만 가지는 경우
 * -> 하나의 서브트리만 가지므로 그냥 한 다리 건너서 링크를 연결해주면 된다.
 * 
 * 3. 삭제하려는 노드가 두개의 서브트리를 가지는 경우
 * -> 이 경우에는 후계자로 될 수 있는 노드가 2가지이다. 하나는 왼쪽 서브트리에서 가장 큰 값, 하나는 오른쪽 서브트리에서 가장 작은 값을 가지는 노드이다.
 * 따라서 후계자 노드를 탐색하는 과정이 추가된다.
 */
TreeNode* delete_recursion(TreeNode *root, int data) {
  if (root == NULL) return root;

  if (data < root->data) {
    root->left = delete_recursion(root->left, data)
  } else if (data > root->data) {
    root->right = delete_recursion(root->right, data)
  } else { // 탐색 성공했을 경우 세가지 케이스에 대해 핸들링한다.
    if (root->left == NULL) {
      TreeNode *temp = root->right;
      free(root);
      return temp;
    } else if (root->right == NULL) {
      TreeNode *temp = root->left;
      free(root);
      return temp;
    } 

     TreeNode *temp = min_value(root->right);
     root->data = temp->data;

     delete_recursion(root->right, temp->data);
  }

  return root;
}

TreeNode* min_value(TreeNode *root) {
  TreeNode *current = root;

  while(current->left != NULL) {
    current = current->left;
  }

  return current;
}
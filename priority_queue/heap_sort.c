#include <stdio.h>
#include <stdlib.h>

#define MAX_ELEMENT 200

typedef struct {
  int key;
} element;

typedef struct {
  element heap[MAX_ELEMENT]; // 힙은 1차원 배열로 표현될 수 있다.
  int heap_size;
} HeapType;

HeapType* create() {
  return (HeapType*)malloc(sizeof(HeapType));
}

void init(HeapType *h) {
  h->heap_size = 0;
}

/**
 * 삽입연산
 * 1. 말단 노드의 인덱스를 구합니다.
 * 2. 배열이 빈 경우를 validation하고, 부모의 key값과 비교를 하여 부모의 값이 더 작으면 부모를 끌어내립니다.
 * 3. 반복문을 돌며, 부모의 값이 더 큰 경우 지금 인덱스의 요소에 값을 삽입하고 종료합니다.
 */
void insert(HeapType *h, element item) {
  int i;
  i = ++(h->heap_size); // 새로 삽입되게 될 노드의 부모를 찾기 위해 미리 1을 더해준다.

  while((i != 1) && (item.key > h->heap[i / 2].key)) { // 부모 노드의 인덱스는 2로 나눠준 정수값이다.
    h->heap[i] = h->heap[i / 2];
    i /= 2;
  }
  h->heap[i] = item; // 부모 노드가 더 크면 그 자리에 item의 키값을 삽입한다.
}

/**
 * 삭제연산 (max heap)
 * 1. 루트노드를 삭제합니다.
 * 2. 말단노드를 루트노드로 가져옵니다.
 * 3. 반복문을 돌며, 자식과 값을 비교해서 자식의 값이 더 큰 경우 자식을 끌어올립니다.
 * 4. 더이상 큰 자식노드가 없을 경우, 지금 인덱스 요소에 값을 삽입하고 종료합니다.
 */
element delete(HeapType *h) {
  element rootNode = h->heap[1];

  element leafNode = h->heap[h->heap_size--];

  int parent, child;

  parent = 1;
  child = 2;

  while (child <= h->heap_size) {
    if (child < h->heap_size && h->heap[child].key < h->heap[child + 1].key) {
      child++;
    }

    if (leafNode.key >= h->heap[child].key) break;

    h->heap[parent] = h->heap[child];
    parent = child;
    child *= 2;
  }

  h->heap[parent] = leafNode;
  return rootNode;
}

void heap_sort(element a[], int n) {
  int i;
  HeapType *h;

  h = create();
  init(h);

  for (i = 0; i < n; i++) {
    insert(h, a[i]);
  }

  for (i = n - 1; i >= 0; i--) {
    a[i] = delete(h);
  }

  free(h);
}

#define SIZE 8

int main(void) {
  element list[SIZE] = { 23, 56, 11, 9, 56, 99, 27, 35};
  heap_sort(list, SIZE);
  for (int i = 0; i < SIZE; i++) {
    printf("%d ", list[i].key);
  }

  printf("\n");
  return 0;
}





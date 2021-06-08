#include <stdio.h>
#include <stdlib.h>

typedef struct DListNode {
  struct DListNode *prev;
  struct DListNode *next;
  int data;
} DListNode;

void init(DListNode *head) {
  head->next = head;
  head->prev= head;
}

void insert_right(DListNode *before, int data) {
  DListNode *newNode = (DListNode*)malloc(sizeof(DListNode));
  newNode->data = data;
  newNode->prev = before;
  newNode->next = before->next;

  before->next->prev = newNode;
  before->next = newNode;
}

void insert_left(DListNode *after, int data) {
  DListNode *newNode = (DListNode*)malloc(sizeof(DListNode));
  newNode->data = data;
  newNode->next = after;
  newNode->prev = after->prev;

  after->prev->next= newNode;
  after->prev = newNode;
}

void delete_node(DListNode *head, DListNode *removed) {
  if (removed == head) return;

  removed->prev->next = removed->next;
  removed->next->prev = removed->prev;
  free(removed);
}

void print_list(DListNode* head) {
  DListNode *p = head->next;

  while(p != head) {
    printf(" <==%d==> ", p->data);
    p = p->next;
  }
  printf("\n");
}

int main(void) {
  DListNode *head = (DListNode*)malloc(sizeof(DListNode));

  init(head);
  printf("추가\n");
  for (int i = 0; i < 5; i++) {
    insert_right(head, i);
    print_list(head);
  }

  printf("왼쪽에 추가해보자\n");
  insert_left(head, 100);
  print_list(head);

  printf("삭제\n");
  for (int i = 0; i < 5; i++) {
    print_list(head);
    delete_node(head, head->next);
  }
  free(head);

  return 0;
}
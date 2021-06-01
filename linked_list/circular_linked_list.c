#include <stdio.h>
#include <stdlib.h>

typedef struct ListNode {
	int data;
	struct ListNode *link;
} ListNode;

ListNode* insert_first(ListNode *head, int data) {
	ListNode *node = (ListNode*)malloc(sizeof(ListNode));

	head->data = data;
	if (head == NULL) {
		head = node;
		head->data = data;
	} else {
		node->link = head->link;
		head->link = node;
	}

	return head;
}

ListNode* insert_last(ListNode *head, int data) {
	ListNode *node = (ListNode*)malloc(sizeof(ListNode));
	node->data = data;
	if (head == NULL) {
		head = node;
	} else {
   	node->link = head->link;
		head->link = node;
		head = node;
	}	
	return head;
}

void print_list(ListNode *head) {
	if (head == NULL) return;
	ListNode *p = head->link;

	while(p != head) {
		printf("%d", p->data);
		p = p->link;
	}
	printf("%d", head->data);
}

int main(void) {
	ListNode *head = NULL;

	head = insert_last(head, 20);
	head = insert_last(head, 30);
	head = insert_last(head, 40);
	head = insert_first(head, 10);
	print_list(head);
	return 0;
}

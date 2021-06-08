#include <stdio.h>
#include <stdlib.h>

typedef struct ListNode {
	int data;
	struct ListNode* next;
} ListNode;

ListNode* insert_first(ListNode* head, int data) {
	ListNode *node = (ListNode*)malloc(sizeof(ListNode));
	node->data = data;
	if (head == NULL) {
		head = node;
		head->next = head;
	} else {
		node->next = head->next;
		head->next = node;
	}
	return head;
}

ListNode* insert_last(ListNode *head, int data) {
	ListNode *node = (ListNode*)malloc(sizeof(ListNode));
	node->data = data;
	if (head == NULL){
		head = node;
		node->next = head;
	} else {
		node->next = head->next;
		head->next = node;
		head = node;
	}
	return head;
}

void print_list(ListNode* head) {
	ListNode *p;
	if (head == NULL) return;
	p = head->next;

	while (p != head) {
		printf("%d => ", p->data);
		p = p->next;
	}	

	printf("%d", head->data);
}

int main(void) {
 ListNode *head = NULL;

  head =	insert_first(head, 10);
	head =	insert_first(head, 20);
	head =	insert_first(head, 30);
	head = insert_last(head, 100);
	head = insert_last(head, 200);
	head = insert_last(head, 300);
	print_list(head);
	return 0;
}
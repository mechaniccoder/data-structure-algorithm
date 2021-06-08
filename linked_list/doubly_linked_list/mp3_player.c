#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef char element[100];
typedef struct MusicNode {
  element data;
  struct MusicNode *prev;
  struct MusicNode *next;
} MusicNode;

MusicNode *current_music;

void init_mp3_player(MusicNode *head) {
  head->prev = head;
  head->next = head;
}

void print_music_node(MusicNode *head) {
  MusicNode *p = head->next;
  printf(" <==head node==> ");

  while(p != head) {
    if (p == current_music) {
      printf(" <==##%s##==> ", p->data);
    } else {
      printf(" <==%s==> ", p->data);
    }
    p = p->next;
  }
  printf("\n");
}

void insert_right(MusicNode *before, element data) {
  MusicNode *new_music_node = (MusicNode*)malloc(sizeof(MusicNode));
  strcpy(new_music_node->data, data);
  new_music_node->prev = before;
  new_music_node->next = before->next;

  before->next->prev = new_music_node;
  before->next = new_music_node;
}

void insert_left(MusicNode *after, element data) {
  MusicNode *new_music_node = (MusicNode*)malloc(sizeof(MusicNode));
  strcpy(new_music_node->data, data);
  new_music_node->prev = after->prev;
  new_music_node->next = after;

  after->prev->next = new_music_node;
  after->prev = new_music_node;
}

void delete_node(MusicNode *head, MusicNode *removed) {
  if (removed == head) return;
  removed->next->prev = removed->prev;
  removed->prev->next = removed->next;
  free(removed);
}

int main(void) {
  char ch;
  MusicNode *head = (MusicNode*)malloc(sizeof(MusicNode));
  init_mp3_player(head);

  insert_right(head, "김종국-한남자");
  insert_right(head, "비-rain");
  insert_right(head, "칠-너희 번호를 누르고");
  insert_left(head, "유재석-마흔");

  current_music = head->next;
  print_music_node(head);

  do {
    printf("\n명령어를 입력하세요.(<, >, q): ");
    ch = getchar();
    if (ch == '<') {
      current_music = current_music->prev;
      if (current_music == head) {
        current_music = current_music->prev;
      }
    } else if (ch == '>') {
      current_music = current_music->next;
      if (current_music == head) {
        current_music = current_music->next;
      }
    }

    print_music_node(head);
    getchar(); // 버퍼에 남아있는 \n을 읽어서 버퍼를 초기화한다.
  } while (ch != 'q');

  return 0;
}
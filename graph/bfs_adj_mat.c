#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
#define MAX_QUEUE_SIZE 10

typedef int element;

typedef struct {
  element queue[MAX_QUEUE_SIZE];
  int front, rear;
  int length;
} QueueType;

void error(char *message) {
  fprintf(stderr, "%s\n", message);
  exit(1);
}

void queue_init(QueueType* q) {
  q->front = 0;
  q->rear = 0;
  q->length = 0;
}

int is_empty(QueueType* q) {
  return q->length == 0;
}

int is_full(QueueType* q) {
  return q->length == MAX_QUEUE_SIZE;
}

void enqueue(QueueType* q, element item) {
  if (is_full(q)) {
    error("원형큐가 가득찼습니다.");
  }
  q->length++;
  q->rear = (q->rear + 1) % MAX_QUEUE_SIZE;
  q->queue[q->rear] = item;
}

element dequeue(QueueType* q) {
  if (is_empty(q)) {
    error("원형큐가 비었습니다.");
  }
  q->length--;
  element result = q->queue[q->front];
  q->front = (q->front + 1) % MAX_QUEUE_SIZE;
  return result;
}

#define MAX_VERTICES 50

typedef struct {
  int n;
  int adj_mat[MAX_VERTICES][MAX_VERTICES];
} GraphType;

int visited[MAX_VERTICES];

void init_graph(GraphType* g) {
  g->n = 0;
  for (int i = 0; i < MAX_VERTICES; i++) {
    for (int j = 0; j < MAX_VERTICES; j++) {
      g->adj_mat[i][j] = 0;
    }
  }
}

void insert_vertex(GraphType* g) {
  if ((g->n) == MAX_VERTICES) {
    fprintf(stderr, "그래프 용량 초과");
    exit(1);
  }
  g->n++;
}

void insert_edge(GraphType* g, int start, int end) {
  if (start + 1 >= MAX_VERTICES || end + 1 >= MAX_VERTICES) {
    fprintf(stderr, "그래프 인덱스 에러");
    exit(1);
  }
  g->adj_mat[start][end] = 1;
  g->adj_mat[end][start] = 1;
}

void bfs_mat(GraphType* g, int v) {
  QueueType *q;
  q = (QueueType*)malloc(sizeof(QueueType));

  queue_init(q);

  enqueue(q, v);
  visited[v] = TRUE;
  printf("\n%d 방문 -> ", v);

  while(!is_empty(q)) {
    v = dequeue(q);
    for (int w = 0; w < g->n; w++) {
      if (!visited[w] && g->adj_mat[v][w]) {
        visited[w] = TRUE;
        printf("%d 방문 -> ", w);
        enqueue(q, w);
      }
    }
  }
}

int main(void) {
  GraphType *g;
  g = (GraphType*)malloc(sizeof(GraphType));
  init_graph(g);

  for (int i = 0; i < 6; i++) {
    insert_vertex(g);
  }

  insert_edge(g, 0, 2);
  insert_edge(g, 2, 1);
  insert_edge(g, 2, 3);
  insert_edge(g, 0, 4);
  insert_edge(g, 4, 5);
  insert_edge(g, 1, 5);

  printf("breath first search");
  bfs_mat(g, 0);
  printf("\n");
  free(g);
  return 0;
}


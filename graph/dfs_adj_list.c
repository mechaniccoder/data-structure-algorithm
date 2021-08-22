#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
#define MAX_VERTICES 50

typedef struct GraphNode {
  int v;
  struct GraphNode* link;
} GraphNode;

typedef struct GraphType {
  int n;
  GraphNode* adj_list[MAX_VERTICES];
} GraphType;

int visited[MAX_VERTICES];

void init_graph(GraphType* g) {
  g->n = 0;
  for (int i = 0; i < MAX_VERTICES; i++) {
    g->adj_list[i] = NULL;
  }
}

void insert_vertex(GraphType* g) {
  if ((g->n) + 1 > MAX_VERTICES) {
    fprintf(stderr, "그래프: 정점 용량 초과");
    return;
  }
  g->n++;
}

void insert_edge(GraphType* g, int v, int w) {
  if (v >= g->n || w >= g->n) {
    fprintf(stderr, "그래프:정점 번호 오류");
    return;
  }

  GraphNode* node = (GraphNode*)malloc(sizeof(GraphNode));
  node->v = w;
  node->link = g->adj_list[v];
  g->adj_list[v] = node;
}

void print_adj_list(GraphType* g) {
  for (int i = 0; i < g->n; i++) {
    GraphNode* p = g->adj_list[i];
    printf("정점 %d ", i);
    while(p != NULL) {
      
      p = p->link;
      printf("-> %d ", p->v);
    }
    printf("\n");
  }
}

void dfs_list(GraphType* g, int v) {
  visited[v] = TRUE;
  GraphNode* w;

  printf("정점 %d -> ", v);
  for (w = g->adj_list[v]; w; w = w->link) {
    if (!visited[w->v]) {
      dfs_list(g, w->v);
    }
  }
}

int main() {
  GraphType* g = (GraphType*)malloc(sizeof(GraphType));
  init_graph(g);

  for (int i = 0; i < 4; i++) {
    insert_vertex(g);
  }




  return 0;
}
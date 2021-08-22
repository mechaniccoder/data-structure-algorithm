#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
#define MAX_VERTICES 50

typedef struct GraphType {
  int n;
  int adj_mat[MAX_VERTICES][MAX_VERTICES];
} GraphType;

int visited[MAX_VERTICES];

void init(GraphType* g) {
  g->n = 0;
  for (int r = 0; r < MAX_VERTICES; r++) {
    for (int c = 0; c <MAX_VERTICES; c++) {
      g->adj_mat[r][c] = 0;
    }
  }
}

void insert_vertex(GraphType* g) {
  if ((g->n) + 1 > MAX_VERTICES) {
    fprintf(stderr, "그래프: 정점 용량 초과");
    return;
  }
  g->n++;
}

void insert_edge(GraphType* g, int start, int end) {
  if (start >= MAX_VERTICES || end >= MAX_VERTICES) {
    fprintf(stderr, "그래프: 정점 번호 오류");
    return;
  }

  g->adj_mat[start][end] = 1;
  g->adj_mat[end][start] = 1;
}

void dfs_mat(GraphType* g, int v) {
  visited[v] = TRUE;

  printf("정점 %d -> ", v);
  for (int w = 0; w < g->n; w++) {
    if (!visited[w] && g->adj_mat[v][w] == 1) {
      dfs_mat(g, w);
    }
  }
}

int main() {
  GraphType *g;
  g = (GraphType*)malloc(sizeof(GraphType));
  init(g);

  for (int i = 0; i < 4; i++) {
    insert_vertex(g);
  }

  insert_edge(g, 0, 1);
  insert_edge(g, 0, 2);
  insert_edge(g, 0, 3);
  insert_edge(g, 0, 4);

  printf("DFS\n");
  dfs_mat(g, 0);
  printf("\n");
  free(g);  
  return 0;
}
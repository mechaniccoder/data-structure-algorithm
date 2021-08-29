#include <stdio.h>
#include <stdlib.h>

#define MAX_VERTICES 50

typedef struct GraphType {
  int n;
  int adj_mat[MAX_VERTICES][MAX_VERTICES];
} GraphType;

void init(GraphType *g) {
  int s, e;
  g->n = 0;

  for (s = 0; s < MAX_VERTICES; s++) {
    for (e= 0; e < MAX_VERTICES; e++) {
      g->adj_mat[s][e] = 0;
    }
  }
}

void insert_vertice(GraphType *g, int v) {
  if (((g->n) + 1) > MAX_VERTICES) {
    fprintf(stderr, "정점 초과");
    return;
  }
  g->n++;
}

void insert_edge(GraphType *g, int start, int end) {
  if (start >= g->n || end >= g->n) {
    fprintf(stderr, "정점 갯수 오류");
    return;
  }

  g->adj_mat[start][end] = 1;
  g->adj_mat[end][start] = 1;
}

void print_adj_mat(GraphType *g) {
  for (int i = 0; i < g->n; i++) {
    for (int j = 0; j <g->n; j++) {
      printf("%2d ", g->adj_mat[i][j]);
    }
    printf("\n");
  }
}

void main() {
  GraphType *g;
  g = (GraphType*)malloc(sizeof(GraphType));
  init(g);

  for (int i = 0; i<4; i++) {
    insert_vertice(g, i);
  }

  insert_edge(g, 0, 1);
  insert_edge(g, 0, 2);
  insert_edge(g, 0, 3);
  insert_edge(g, 1, 2);
  insert_edge(g, 2, 3);

  print_adj_mat(g);

  free(g);
}
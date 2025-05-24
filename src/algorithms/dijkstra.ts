import { GraphData, VertexData } from "utils/types";

class PriorityQueue {
  values: { id: string; priority: number }[] = [];

  enqueue(id: string, priority: number) {
    const newNode = { id, priority };
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0 && end) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let swap: number | null = null;

      if (leftIdx < length) {
        if (this.values[leftIdx].priority < element.priority) {
          swap = leftIdx;
        }
      }

      if (
        rightIdx < length &&
        this.values[rightIdx].priority < (swap === null ? element.priority : this.values[leftIdx].priority)
      ) {
        swap = rightIdx;
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class DijkstraCalculator {
  adjacencyList: Record<string, { id: string; weight: number }[]> = {};

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(from: string, to: string, weight = 1) {
    this.adjacencyList[from].push({ id: to, weight });
    this.adjacencyList[to].push({ id: from, weight });
  }

  calculateShortestPath(start: string, end: string): string[] {
    const nodes = new PriorityQueue();
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    const path: string[] = [];

    for (const vertex in this.adjacencyList) {
      distances[vertex] = vertex === start ? 0 : Infinity;
      nodes.enqueue(vertex, distances[vertex]);
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      const smallest = nodes.dequeue().id;

      if (smallest === end) {
        let curr = end;
        while (previous[curr]) {
          path.push(curr);
          curr = previous[curr]!;
        }
        path.push(start);
        return path.reverse();
      }

      for (const neighbor of this.adjacencyList[smallest]) {
        const candidate = distances[smallest] + neighbor.weight;
        if (candidate < distances[neighbor.id]) {
          distances[neighbor.id] = candidate;
          previous[neighbor.id] = smallest;
          nodes.enqueue(neighbor.id, candidate);
        }
      }
    }

    return [];
  }
}

function calculateDistance(v1: VertexData, v2: VertexData) {
  const dx = v2.cx - v1.cx;
  const dy = v2.cy - v1.cy;
  return Math.sqrt(dx * dx + dy * dy);
}

export function buildGraphFromData(graphData: GraphData): DijkstraCalculator {
  const graph = new DijkstraCalculator();

  graphData.vertices.forEach((v) => graph.addVertex(v.id));
  graphData.edges.forEach((edge) => {
    const fromV = graphData.vertices.find((v) => v.id === edge.from);
    const toV = graphData.vertices.find((v) => v.id === edge.to);
    if (fromV && toV) {
      graph.addEdge(edge.from, edge.to, calculateDistance(fromV, toV));
    }
  });

  return graph;
}

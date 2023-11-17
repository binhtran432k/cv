/**
 * @param {number} n number of nodes in graph
 * @param {[number, number, number][]} edges each edge is [startNode, endNode, length]
 * @param {number} s the start node number
 */
function shortestReach(n, edges, s) {
  /** @type {Record<number,number>[]} */
  const graph = [...Array(n)].map(() => ({}));
  edges.forEach(([u, v, l]) => {
    graph[u - 1][v] = Math.min(l, graph[u - 1][v] ?? l);
    graph[v - 1][u] = Math.min(l, graph[v - 1][u] ?? l);
  });

  const dist = graph.map(() => -1);
  dist[s - 1] = 0;

  const queue = [[s, dist[s - 1]]];
  while (queue.length > 0) {
    const [u, d] = queue.shift();

    if (d > dist[u - 1]) continue;

    Object.entries(graph[u - 1]).forEach(([v, l]) => {
      const alt = dist[u - 1] + l;
      if (alt < dist[v - 1] || dist[v - 1] === -1) {
        dist[v - 1] = alt;
        queue.push([v, alt]);
      }
    });
  }

  dist.splice(s - 1, 1);

  return dist;
}

const a = shortestReach(
  4,
  [
    [1, 2, 24],
    [1, 2, 24],
    [1, 2, 24],
    [1, 4, 20],
    [3, 1, 3],
    [4, 3, 12],
  ],
  1,
);

console.log(a);

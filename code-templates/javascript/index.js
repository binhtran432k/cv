/**
 * @param {number} n number of nodes
 * @param {number} m number of edges
 * @param {[number, number][]} edges
 * @param {number} s start node
 */
function bfs(n, m, edges, s) {
  const graph = [...Array(n)].map(() => []);
  edges.forEach(([u, v]) => {
    graph[u - 1].push(v);
    graph[v - 1].push(u);
  });

  const distances = [...Array(n)].map(() => -1);
  distances[s - 1] = 0;

  const queue = [s];
  while (queue.length > 0) {
    const node = queue.shift();
    graph[node - 1]
      .filter((x) => distances[x - 1] < 0)
      .forEach((neighbor) => {
        distances[neighbor - 1] = distances[node - 1] + 6;
        queue.push(neighbor);
      });
  }

  distances.splice(s - 1, 1);

  return distances;
}

console.log(
  bfs(
    4,
    3,
    [
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    1,
  ),
);

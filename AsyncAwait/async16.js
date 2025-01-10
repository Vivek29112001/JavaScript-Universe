// Question 16: Dependency Graph with Async/AwaitQuestion: How does the code handle recursive dependencies in the graph? Modify the code to detect and avoid circular dependencies.

// Explanation:
// The recursive fetchDependencies function processes each node's dependencies in parallel. Detecting and avoiding circular dependencies requires tracking visited nodes to prevent infinite loops.

async function fetchDependencies(graph, node){
    if(!graph[node])return [node];

    const dependencies =await Promise.all(
        graph[node].map((dep)=> fetchDependencies(graph,dep))
    );

    return [node, ...dependencies.flat()];
}

const dependencyGraph = {
    A: ['B', 'C'],
    B: ['D'],
    C: [],
    D: ['E'],
    E: [],
  };

  fetchDependencies(dependencyGraph, 'A')
  .then(console.log)
  .catch(console.error);
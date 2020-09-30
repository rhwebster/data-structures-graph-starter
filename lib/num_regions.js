function numRegions(graph) {
    let visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (depthSearch(node, graph, visited)) count++;
    }
    return count;
}

function depthSearch(node, graph, visited) {
    if (visited.has(node)) return false;
    visited.add(node);
    graph[node].forEach(neighbor => depthSearch(neighbor, graph, visited))
    return true;
}


// let node;
// if (visited.has(node)) return;
// visited.add(node);
// let count = 0;
// for (node in graph) {
//     count++;
//     graph[node].forEach(neighbor => numRegions(neighbor, visited))
// }
// return count;

// let graph1 = {

//     // [a, b      ]
//     // [c, d, e]
//     // a ------- b
//     // 
//     'a': ['b'],
//     'b': ['a'],
//     'c': ['d'],
//     'd': ['e', 'c'],
//     'e': ['d'],
// };
// console.log(numRegions(graph1))
module.exports = {
    numRegions
};


// let graph2 = {
//     'x': [],
//     'y': [],
//     'z': []
// };
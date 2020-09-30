const { GraphNode } = require('../lib/graph_node');

function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
    if (visited.has(startingNode)) return;
    if (targetVal === startingNode.val) {
        console.log(startingNode.val);
        return startingNode;
    }
    visited.add(startingNode);
    for (let neighbor in startingNode.neighbors) {
        console.log(neighbor);
        return breadthFirstSearch(startingNode.neighbors[neighbor], targetVal, visited);
    };

    return null;
};

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');

a.neighbors = [b, c]
b.neighbors = [d]

console.log(breadthFirstSearch(a, 'b'));

module.exports = {
    breadthFirstSearch
};
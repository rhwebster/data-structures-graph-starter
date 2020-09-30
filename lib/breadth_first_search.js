const {
    GraphNode
} = require('../lib/graph_node');

function breadthFirstSearch(startingNode, targetVal) {
    let nodes = [startingNode];
    let visited = new Set();

    while (nodes.length) {
        let node = nodes.shift();
        if (visited.has(node)) continue;
        if (targetVal === node.val) {
            return node;
        }
        visited.add(node);
        node.neighbors.forEach((el) => nodes.push(el));
    }

    return null;
}



module.exports = {
    breadthFirstSearch,
};
const {
    GraphNode
} = require('../lib/graph_node');

function maxValue(node, visited = new Set(), max = new Array()) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    let neighborMaxes = node.neighbors.map(neighbor => maxValue(neighbor, visited))
    return Math.max(node.val, ...neighborMaxes)
    // if (node.val > max[0] || max.length === 0) {
    //     if (max.length !== 0) {
    //         max.shift(node.val)
    //     }
    //     max.push(node.val)
    // }
    // node.neighbors.forEach(neighbor => maxValue(neighbor, visited, max));
    // return max[0];
}

// let eight = new GraphNode(8);
// console.log(maxValue(eight))

// let five = new GraphNode(5);
// let three = new GraphNode(3);
// let two = new GraphNode(2);
// let four = new GraphNode(4);
// let ten = new GraphNode(10);
// let seven = new GraphNode(7);
// let six = new GraphNode(6);
// five.neighbors = [three, two, four];
// two.neighbors = [seven, ten];
// four.neighbors = [six];
// console.log(maxValue(five))

module.exports = {
    maxValue
};
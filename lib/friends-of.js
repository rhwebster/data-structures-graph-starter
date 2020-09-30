/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
  let visited = new Set();

  while (currentDistance < maxDistance) {
    for (let key in adjacencyList) {
      if (key === startingNode) {
        let friends = adjacencyList[key];
        for (let i = 0; i < friends.length; i++) {
          visited.add(friends[i]);
        }
        console.log(visited)
        // }
      }
    }
    currentDistance++;
  }
  
  // let friendArray = Array.from(visited)
  // friendArray.push()
}

function friendsOf(adjacencyList, name, distance) {
    let startingNode = name;
    let visited = new Set();
    let count = 1;

    

    // while (count < distance) {

    //   let node = nodes.shift();
    //   if (visited.has(node)) continue;
    //   if (targetVal === node.val) {
    //     return node;
    //   }
    //   visited.add(node);
    //   node.neighbors.forEach((el) => nodes.push(el));
    // }

    // return null;
}

const graph = {
  'carrie': ['humza', 'jun'],
  'farrah': ['humza'],
  'humza': ['carrie', 'farrah', 'jun', 'silla'],
  'jun': ['carrie', 'silla'],
  'ophelia': ['travis'],
  'silla': ['humza', 'yervand'],
  'travis': ['ophelia'],
  'yervand': ['silla'],
};

console.log(friendsOf(graph, 'carrie', 1));

/******************************************************************************
* Do not change code beneath this line.
*/
try {
exports.friendsOf = friendsOf;
} catch (e) {
exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}

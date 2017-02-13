# Learning Contract for Goal: Core Data Structures

[Description](#description) | [Basic Data Structures](#basic-data-structures) | [Advanced Data Structures](#advanced-data-structures) | [Context](#context) | [Specifications](#specifications) | [Quality Rubric](#quality-rubric)

## Description

Write tests and implementations for common data structures.

Fork the this repository and use the fork as your project artifact.

Use the list below as a reference for each data structure's interface.

## Advanced Data Structures

### Hash Table

Maps keys to values, like a dictionary or a phone book. Or an object in JavaScript...

From [Wikipedia](https://en.wikipedia.org/wiki/Hash_table) [edited]:

> A data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of _buckets_ or _slots_, from which the desired value can be found.

```javascript
const ht = new HashTable()
ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table.
ht.get("name")              // returns the data associated with key.
ht.contains("name")         // returns true if the hash table contains the key.
ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
ht.remove("name")           // removes a key-value pair by key.
ht.size()                   // returns the number of key-value pairs in the hash table.
HashTable.hash("name")      // generates a hash for the key "name"
```

### Binary Search Tree

Maps keys to values, like a dictionary or a phone book. Or an object in JavaScript...

From [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree) [edited]:

> A particular type of container that allows fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).
>
> Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, based on the comparison, to continue searching in the left or right subtrees.

```javascript
const bst = new BinarySearchTree()
bst.insert(3)  // inserts a node with the specified value into the tree.
bst.search(3)  // returns a node object or null if not found.
bst.remove(3)  // removes an value's node (if exists) from the tree.
bst.traverse('inOrder', (val) => console.log(val)) // traverse the tree in the defined order (either 'preOrder', 'inOrder', or 'postOrder') and apply function on each node's value.
bst.count()    // return the number of nodes in the tree.
```

### Directed Graph

Nodes connected by vertices with a direction.

From [Wikipedia](https://en.wikipedia.org/wiki/Directed_graph) [edited]:

> A graph (that is a set of vertices connected by edges), where the edges have a direction associated with them.

```javascript
const diGraph = new DirectedGraph()
diGraph.addVertex('v1')               // adds a vertex to the graph.
diGraph.hasVertex('v1')               // returns true if the graph contains the vertex or false if not.
diGraph.addDirection('v1', 'v2' , 3)  // adds a direction from 'v1' to 'v2' with a weight (number).
diGraph.hasDirection('v1', 'v2')      // returns true if there's a direction from 'v1' to 'v2'.
diGraph.getDirectionWeight('v1', 'v2') // returns direction weight between v1 & v2 or null if no direction exists.
diGraph.visit( 'v1', vertex => console.log(vertex)) // visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex.
diGraph.findShortestPath('v1', 'v2')  // returns an array of all the shortest paths between two vertices based on the sum of weights.
diGraph.removeDirection('v1', 'v2')   // removes an existing direction between 'v1' and 'v2'.
diGraph.getSeparatedVertices()        // returns an array of all the vertices that are separated from the graph.
diGraph.removeVertex('v1')            // removes an existing vertex and all its directions (the incoming and outgoing).
diGraph.count()                       // returns the number of vertices in the graph.
```

### Sources

Most of the below was shamelessly borrowed from Wikipedia and these libraries:

- [datastructures-js](https://github.com/eyas-ranjous/datastructures-js)
- [singly-linked-list](https://www.npmjs.com/package/singly-linked-list)

## Context

If you spend most of your time programming in high-level languages, you may not realize how often you use data structures or how they are built. Sometimes it's useful to peek under the hood and see how the engine works.

The nice thing is, most data structures are **actually quite simple** when you get down to it. They have straight-forward, relatively small interfaces.

In a larger sense, being more familiar with data structures is helpful for you ability to think about data more abstractly, and to design better software.

## Specifications

- [ ] Artifact produced is a fork of the [core-data-structures][core-data-structures] repo.
- [ ] Can run all tests with `npm test`.
- [ ] All tests are passing.
- [ ] For each data structure identified above, there exists:
  - [ ] a test file with unit tests for each method and property.
  - [ ] an implementation file with a correct implementation of the data structure.

### Required

- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

### Stretch

Pick a _different_ programming language from JavaScript (e.g. Ruby, Swift, Python, C, Java...) and write tests & implementations for each.

- [ ] Can run all non-JavaScript tests with a single command.
- [ ] For each data structure identified above, there exists:
  - [ ] a test file with unit tests for each method and property _in a language other than JavaScript_.
  - [ ] an implementation file with a correct implementation of the data structure _in a language other than JavaScript_.

## Quality Rubric

**Well formatted code**
- Code uses a linter, which can be invoked with a command (e.g. `npm run lint`). [50 points]
- Running the linter on all source code files generates no linting errors. [50 points]

**Clear and useful README**
- Repository includes a README file with installation and setup instructions. [25 points]
- Repository includes a README file with usage instructions and at least one example use case. [25 points]

**Proper dependency management**
- There is a command to install dependencies (e.g. `npm install`) and it is specified in the installation and setup instructions of the README. [50 points]

**Good project management**
- Commit messages are concise and descriptive. [25 points]
- All features are added via pull requests. [25 points]
- Every pull request has a description summarizing the changes made. [25 points]
- Every pull request has been reviewed by at least one other person. [25 points]

[mit-license]: https://opensource.org/licenses/MIT
[core-data-structures]: https://github.com/GuildCrafts/core-data-structures

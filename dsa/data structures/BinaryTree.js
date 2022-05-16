class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  // breadth first search
  bfs() {
    let node = this.root;
    const queue = [];
    const visited = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
  //     8
  //  3    10
  // 1 6  7 11
  // [8,3,10,1,6,7,11]

  dfsPre() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  //     8
  //  3    10
  // 1 6  7 11
  // [8,3,1,6,10,7,11]
  dfsPost() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  dfsInOrder() {
    const data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

exports.BinarySearchTree = BinarySearchTree;

const Tree = require("./data structures/BinaryTree");

class BinarySearchTRee extends Tree.BinarySearchTree {
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else return true;
    }
    return false;
  }
}
// 3
//   10
//  4   17
// 3 5 12 18

const tree = new BinarySearchTRee();
tree.insert(10);
tree.insert(4);
tree.insert(17);
tree.insert(12);
tree.insert(18);
tree.insert(3);
tree.insert(5);

console.log(tree.contains(3));

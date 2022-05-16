const List = require("./data structures/SinglyLinkedList");

class ReversedList extends List.SinglyLinkedList {
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new ReversedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
list.reverse();
list.print();

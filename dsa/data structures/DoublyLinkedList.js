class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    console.log(newNode);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const delTail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    }
    this.tail = delTail.prev;
    this.tail.next = null;
    delTail.prev = null;
    this.length--;
    return delTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    let current;
    let counter;
    if (index <= middle) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }

    current = this.tail;
    counter = this.length - 1;
    while (counter !== index) {
      current = current.prev;
      counter--;
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const prevNode = this.get(index - 1);
    const newNode = new Node(val);
    const temp = prevNode.next;
    newNode.next = temp;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    temp.prev = newNode;
    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    let preNode = removedNode.pre;
    let nextNode = removedNode.next;

    nextNode.pre = removedNode.pre;
    preNode.next = removedNode.next;
    nextNode = null;
    preNode = null;
    this.length--;
    return removedNode;
  }
}

const list = new DoublyLinkedList();
list.push("start");
list.push("end");

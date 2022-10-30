import ListNode from './ListNode.js';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const node = new ListNode(value);

    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
    return node;
  }

  prepend(value) {
    const node = new ListNode(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.head;
      this.head = node;
      node.next = temp;
    }

    this.size++;
    return node;
  }

  insertAt(value, index) {
    if (index < 0) throw new Error('Invalid index!');

    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.size) {
      return this.append(value);
    }

    const node = new ListNode(value);
    const prevNode = this.at(index - 1);
    const currentNode = prevNode.next;
    prevNode.next = node;
    node.next = currentNode;
    this.size++;
    return node;
  }

  at(index) {
    if (this.size === 0) {
      throw new Error('List is empty!');
    }

    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index!');
    }

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('List is empty!');
    }

    if (this.size < 2) {
      this.head = null;
      this.tail = null;
    } else {
      // Indexes in our list are starting from 0. We want to subtract 2 from the size
      // so we can find the node which is before the node we want to remove.
      let temp = this.at(this.size - 2);
      temp.next = null;
      this.tail = temp;
    }

    this.size--;
  }

  removeAt(index) {
    if (this.size === 0) throw new Error('List is empty!');
    if (index < 0 || index >= this.size) throw new Error('Invalid index!');

    if (this.size === 1 || index === this.size - 1) {
      this.pop();
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prevNode = this.at(index - 1);
      const currentNode = prevNode.next;
      prevNode.next = currentNode.next;
    }

    this.size--;
  }

  contains(value) {
    let temp = this.head;
    while (temp) {
      if (temp.value === value) return true;

      temp = temp.next;
    }

    return false;
  }

  find(value) {
    let index = 0;
    let temp = this.head;

    while (temp) {
      if (temp.value === value) return index;

      temp = temp.next;
      index++;
    }

    return null;
  }

  toString() {
    if (this.size === 0) return null;

    let string = '';
    let temp = this.head;
    while (temp) {
      string += `( ${temp.value} ) -> `;
      temp = temp.next;
    }

    string += null;
    return string;
  }
}

export default LinkedList;

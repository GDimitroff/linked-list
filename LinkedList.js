import ListNode from './ListNode.js';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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

    if (this.head === null) {
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

    if (this.head === null) {
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

  at(index) {
    if (!this.head) {
      throw new Error('List is empty!');
    }

    let currentIndex = 0;
    let temp = this.head;
    while (temp) {
      if (index === currentIndex) {
        return temp;
      }

      temp = temp.next;
      currentIndex++;
    }

    throw new Error('Invalid index!');
  }

  pop() {
    if (this.size === 0) {
      throw new Error('List is empty!');
    }

    if (this.size < 2) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.at(this.size - 2);
      temp.next = null;
      this.tail = temp;
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
}

export default LinkedList;

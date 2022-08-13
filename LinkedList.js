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
      return 'List is empty!';
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

    return 'Invalid index!';
  }
}

export default LinkedList;

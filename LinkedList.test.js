import LinkedList from './LinkedList';

let linkedList;
beforeEach(() => {
  linkedList = new LinkedList();
});

describe('Linked List', () => {
  test('Creating empty Linked List', () => {
    expect(linkedList.getHead()).toBe(null);
    expect(linkedList.getTail()).toBe(null);
    expect(linkedList.getSize()).toBe(0);
  });

  test('Append node to the Linked List', () => {
    linkedList.append('First Node');

    expect(linkedList.getHead().value).toBe('First Node');
    expect(linkedList.getHead().next).toBe(null);
    expect(linkedList.getTail().value).toBe('First Node');
    expect(linkedList.getTail().next).toBe(null);
    expect(linkedList.getSize()).toBe(1);
  });

  test('Append 2 nodes to the Linked List', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');

    expect(linkedList.getHead().value).toBe('First Node');
    expect(linkedList.getTail().value).toBe('Second Node');
    expect(linkedList.getTail().next).toBe(null);
    expect(linkedList.getSize()).toBe(2);
  });

  test('Prepend node to the Linked List', () => {
    linkedList.prepend('First Node');

    expect(linkedList.getHead().value).toBe('First Node');
    expect(linkedList.getHead().next).toBe(null);
    expect(linkedList.getTail().value).toBe('First Node');
    expect(linkedList.getTail().next).toBe(null);
    expect(linkedList.getSize()).toBe(1);
  });

  test('Prepend 2 nodes to the Linked List', () => {
    linkedList.prepend('First Node');
    linkedList.prepend('Second Node');

    expect(linkedList.getHead().value).toBe('Second Node');
    expect(linkedList.getTail().value).toBe('First Node');
    expect(linkedList.getTail().next).toBe(null);
    expect(linkedList.getSize()).toBe(2);
  });
});

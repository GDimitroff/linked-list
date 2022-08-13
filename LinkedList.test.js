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

  test('At function returns the correct node', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');
    linkedList.append('Third Node');

    expect(linkedList.at(0).value).toBe('First Node');
    expect(linkedList.at(2).value).toBe('Third Node');
  });

  test('At function throws error when called on empty list', () => {
    expect(() => {
      linkedList.at(0);
    }).toThrow('List is empty!');
  });

  test('At function throws error when called with invalid index', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');
    linkedList.append('Third Node');

    expect(() => {
      linkedList.at(4);
    }).toThrow('Invalid index!');
  });

  test('Pop function throws error when called on empty list', () => {
    expect(() => {
      linkedList.pop();
    }).toThrow('List is empty!');
  });

  test('Pop function removes last node', () => {
    linkedList.append('First Node');
    linkedList.pop();
    linkedList.append('Second Node');
    linkedList.append('Third Node');
    linkedList.append('Fourth Node');
    linkedList.pop();

    expect(() => {
      linkedList.at(3);
    }).toThrow('Invalid index!');
  });
});

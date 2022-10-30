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

  test('inertAt inserts node at the given index', () => {
    linkedList.insertAt('First Node', 0);
    console.log(linkedList);
    linkedList.append('Second Node');
    linkedList.append('Third Node');
    linkedList.append('Fifth Node');
    linkedList.insertAt('Fourth Node', 3);
    expect(linkedList.at(3).value).toBe('Fourth Node');
  });

  test('inertAt throws error if provided index is negative integer', () => {
    expect(() => {
      linkedList.insertAt('First Node', -1);
    }).toThrow('Invalid index!');
  });

  test('inertAt inserts node at the end if the given index is greater than list size', () => {
    linkedList.append('First Node');
    linkedList.insertAt('Second Node', 2);

    expect(linkedList.at(1).value).toBe('Second Node');
  });

  test('At method returns the correct node', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');
    linkedList.append('Third Node');

    expect(linkedList.at(0).value).toBe('First Node');
    expect(linkedList.at(2).value).toBe('Third Node');
  });

  test('At method throws error when called on empty list', () => {
    expect(() => {
      linkedList.at(0);
    }).toThrow('List is empty!');
  });

  test('At method throws error when called with invalid index', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');
    linkedList.append('Third Node');

    expect(() => {
      linkedList.at(4);
    }).toThrow('Invalid index!');
  });

  test('Pop method throws error when called on empty list', () => {
    expect(() => {
      linkedList.pop();
    }).toThrow('List is empty!');
  });

  test('Pop method removes last node', () => {
    linkedList.append('First Node');
    linkedList.pop();
    linkedList.append('Second Node');
    linkedList.append('Third Node');
    linkedList.append('Fourth Node');
    linkedList.pop();

    expect(() => {
      linkedList.at(2);
    }).toThrow('Invalid index!');

    expect(() => {
      linkedList.pop();
      linkedList.pop();
      linkedList.pop();
    }).toThrow('List is empty!');
  });

  test('removeAt() throws error if index is not valid', () => {
    expect(() => {
      linkedList.removeAt(0);
    }).toThrow('List is empty!');

    linkedList.append('First Node');

    expect(() => {
      linkedList.removeAt(-1);
    }).toThrow('Invalid index!');

    expect(() => {
      linkedList.removeAt(1);
    }).toThrow('Invalid index!');
  });

  test('removeAt() works as expected when there is a single node in the list', () => {
    linkedList.append('First Node');
    linkedList.removeAt(0);
    expect(linkedList.getHead()).toBe(null);
    expect(linkedList.getTail()).toBe(null);
  });

  test('removeAt() works as expected when removing the node at last index', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');
    linkedList.append('Third Node');
    linkedList.removeAt(2);
    expect(linkedList.getTail().value).toBe('Second Node');
  });

  test('removeAt() works as expected when removing the node in middle', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');
    linkedList.append('Third Node');
    linkedList.append('Fourth Node');
    linkedList.removeAt(1);

    expect(linkedList.getSize()).toBe(3);
    expect(linkedList.getHead().value).toBe('First Node');
    expect(linkedList.getTail().value).toBe('Fourth Node');

    linkedList.removeAt(0);
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.getHead().value).toBe('Third Node');
    expect(linkedList.getTail().value).toBe('Fourth Node');
  });

  test('Contains returns true if searched value is found', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');
    linkedList.append('Third Node');

    expect(linkedList.contains('Second Node')).toBe(true);
  });

  test('Contains returns false if searched value is not found', () => {
    linkedList.append('First Node');

    expect(linkedList.contains('Second Node')).toBe(false);
  });

  test('Find value return correct index or null', () => {
    linkedList.append('First Node');
    linkedList.append('Second Node');
    linkedList.append('Third Node');

    expect(linkedList.find('Second Node')).toBe(1);
    expect(linkedList.find('Fourth Node')).toBe(null);
  });

  test('reverse() empty list throws error', () => {
    expect(() => {
      linkedList.reverse();
    }).toThrow('List is empty!');
  });

  test('reverse() list with one node', () => {
    linkedList.append('First Node');
    linkedList.reverse();

    expect(linkedList.find('First Node')).toBe(0);
    expect(linkedList.find('Fourth Node')).toBe(null);
  });

  test('reverse() works as expected', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.reverse();

    expect(linkedList.find(1)).toBe(3);
    expect(linkedList.find(4)).toBe(0);
  });

  test('toString() returns correct output', () => {
    expect(linkedList.toString()).toBe(null);

    linkedList.append('First Node');
    linkedList.append('Third Node');
    linkedList.append('Second Node');

    expect(linkedList.toString()).toBe(
      '( First Node ) -> ( Third Node ) -> ( Second Node ) -> null'
    );
  });
});

import ListNode from './ListNode';

describe('List node', () => {
  it('Should return node', () => {
    const node = new ListNode('First');
    expect(node.value).toBe('First');
    expect(node.next).toBe(null);
  });

  it('Should return empty node', () => {
    const node = new ListNode();
    expect(node.value).toBe(null);
    expect(node.next).toBe(null);
  });
});


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

    def __repr__(self):
        return f"Node({self.value})"


class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, x):
        if not isinstance(x, Node):
            x = Node(x)
        x.next = self.head
        if self.head is not None:
            self.head.prev = x
        self.head = x
        x.prev = None

    def delete(self, x):
        if not isinstance(x, Node):
            x = self.search(x)
        if x.prev is not None:
            x.prev.next = x.next
        else:
            self.head = x.next
        if x.next is not None:
            x.next.prev = x.prev

    def search(self, k):
        x = self.head
        while x is not None and x.value != k:
            x = x.next
        return x;

    def __repr__(self):
        if self.head is None:
            return "NIL"
        rep = repr(self.head)
        next = self.head.next
        while next is not None:
            rep += " -> " + repr(next)
            next = next.next
        rep += " -> NIL"
        return rep

    def print(self):
        print(self.__repr__())

if __name__ == '__main__':
    L = LinkedList()
    L.insert(5)
    L.insert(7)
    L.insert(10)
    print(repr(L))
    L.delete(7)
    print(repr(L))
    print(L.search(5))
    print(L.search(8))


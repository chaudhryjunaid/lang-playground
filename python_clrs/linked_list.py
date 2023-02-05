
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
        x.next = self.head
        if self.head is not None:
            self.head.prev = x
        self.head = x
        x.prev = None

    def delete(self, x):
        if x.prev is not None:
            x.prev.next = x.next
        else:
            self.head = x.next
        if x.next is not None:
            x.next.prev = x.prev

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


if __name__ == '__main__':
    L = LinkedList()
    L.insert(Node(5))
    L.insert(Node(7))
    print(repr(L))


from linked_list import Node, LinkedList

class Q(LinkedList):
    def enqueue(self, x):
        print(f"inserting {x} on {self.__repr__()}")
        self.insert(x)  

    # note that this dequeue is not O(1)
    def dequeue(self):
        if self.head is None:
            return None
        x = self.head
        while x.next is not None:
            x = x.next
        if x.prev is not None:
            x.prev.next = None
        else:
            self.head = None
        return x


if __name__ == '__main__':
    print("hello, world!")
    q = Q()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.print()
    print(q.dequeue(), q.dequeue(), q.dequeue(), q.dequeue())



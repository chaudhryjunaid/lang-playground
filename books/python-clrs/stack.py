from linked_list import Node, LinkedList

class Stack(LinkedList):
    def push(self, x):
        self.insert(x)

    def pop(self):
        x = self.head
        if x is not None:
            self.head = self.head.next
            if self.head is not None:
                self.head.prev = None
        return x


if __name__ == '__main__':
    s = Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    s.print()
    print(s.pop(), s.pop(), s.pop(), s.pop())
        

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, value):
        new_node = LinkedListNode(value, None)

        if not self.head:
            self.head = new_node
            self.tail = new_node
            return self

        self.tail.next = new_node
        self.tail = new_node

        return self

    def prepend(self, value):
        new_node = LinkedListNode(value, self.head)
        self.head = new_node

        if not self.tail:
            self.tail = new_node

        return self


class LinkedListNode:
    def __init__(self, value, next):
        self.value = value
        self.next = next

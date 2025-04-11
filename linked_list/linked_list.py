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

    def delete(self, value):
        if not self.head:
            return

        deletednode = None

        while self.head and self.head.value == value:
            deletednode = self.head
            self.head = self.head.next

        current_node = self.head

        if current_node:
            while current_node.next:
                if current_node.next.value == value:
                    deletednode = current_node.next
                    current_node.next = current_node.node.next.next
                else:
                    current_node = current_node.next

        if self.tail.value == value:
            self.tail = current_node

        return deletednode


class LinkedListNode:
    def __init__(self, value, next):
        self.value = value
        self.next = next

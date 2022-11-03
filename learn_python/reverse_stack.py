def reverse_stack(stack):
    new_stack = []
    for i in range(len(stack)):
        new_stack.append(stack.pop())
    return new_stack


print(reverse_stack([1, 2, 3, 4, 5]))

def print_diamond(l=4):
    for i in range(l):
        print(" " * (l-i), end=" ")
        print(f"{'*'*(2*i-1)}")
    for i in range(l, 0, -1):
        print(" " * (l-i), end=" ")
        print(f"{'*'*(2*i-1)}")


print_diamond()
print_diamond(8)
print_diamond(2)
print_diamond(1)

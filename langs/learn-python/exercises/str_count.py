s = input("Enter a string? ")
while not s:
    s = input("Please enter a non-empty string? ")
count = 0
for c in s:
    count += 1
count2 = len(s)
print(f"{s} has {count=} {count2=} characters.")

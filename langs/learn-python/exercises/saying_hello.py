name = input("What is your name? ")
names = name.split(" ")
non_empty_names = [n for n in names if n]
response = f"Hello, {non_empty_names[0]}, nice to meet you!"
print(response)

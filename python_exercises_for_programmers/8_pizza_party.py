pizzas = int(input("Enter number of Pizzas? "))
people = int(input("Enter number of people? "))

slices = pizzas * 8

print(f"{people} people with {pizzas} pizzas")
print(f"Each person gets {slices // people} pieces of pizza.")
print(f"There are {slices % people} leftover pieces.")


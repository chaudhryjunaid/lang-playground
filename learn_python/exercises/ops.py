num1_str = input("Enter first number? ")
num2_str = input("Enter second number? ")
num1 = int(num1_str)
num2 = int(num2_str)
added = sum([num1, num2])
subtracted = num1 - num2
multiplied = num1 * num2
divided = num1 / num2
floorDivided = num1 // num2
exponentiated = num1 ** num2
print(f"""{num1} + {num2}: {added}
{num1} - {num2}: {subtracted}
{num1} * {num2}: {multiplied}
{num1} / {num2}: {divided}
{num1} // {num2}: {floorDivided}
{num1} ** {num2}: {exponentiated}""")

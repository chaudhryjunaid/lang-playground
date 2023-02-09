import re
from argon2 import PasswordHasher

ph = PasswordHasher()
s = ""

while s != 'quit':
    s = input(">> ")
    s = s.lower().strip()
    s = re.sub(r"[\s\t]+", " ", s)

    result = "Command not recognized!"
    tokens = s.split(" ")
    if tokens[0] == "encrypt" and len(tokens) == 2:
        result = ph.hash(tokens[1])
    elif tokens[0] == "verify" and len(tokens) == 3:
        result = ph.verify(tokens[1], tokens[2])
    elif tokens[0] == "quit":
        result = "Goodbye!"
    print(result)

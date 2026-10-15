import random


def guess_the_number(n=random.randint(1, 10)):
    print(f"the number is: {n!r}")
    tries = 0
    while tries < 5:
        guess = input("Guess the number? ")
        try:
            guessed_number = int(guess)
            if guessed_number == n:
                print("You won!")
                break
            elif guessed_number < n:
                print("The number is lower than the guess.")
            else:
                print("The number is higher than the guess")
        except Exception as e:
            raise
        tries += 1


guess_the_number()

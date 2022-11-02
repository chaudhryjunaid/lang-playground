def print_even_length_words(s):
    words = s.split(" ")
    for w in words:
        if len(w) % 2 == 0:
            print(w, end=" ")
    print()


print_even_length_words("this is a non even sentence")

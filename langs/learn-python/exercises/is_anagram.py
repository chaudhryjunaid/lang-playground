def is_anagram(word1, word2):
    word1_set = set(word1)
    word2_set = set(word2)
    print(f"{word1_set=} {word2_set=}")
    if len(word1_set) != len(word2_set):
        return False
    for c in word1_set:
        if not c in word2_set:
            return False
    return True


word1 = input("Enter first word? ")
word2 = input("Enter second word? ")

while word1 and word2:
    print(f"{word1} {'IS' if is_anagram(word1,word2) else 'is NOT'} an anagram of {word2}")
    word1 = input("Enter first word? ")
    word2 = input("Enter second word? ")

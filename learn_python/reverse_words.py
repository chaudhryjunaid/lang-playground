def reverse_words(s):
    return ' '.join(reversed(s.split(' ')))


print(reverse_words("this is a sentence"))
print(reverse_words(" a  b "))

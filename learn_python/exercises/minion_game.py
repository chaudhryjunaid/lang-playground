def minion_game(string):
    # your code goes here
    vowels = "AEIOU"
    kevin = {}
    stuart = {}
    for i in range(len(string)):
        if string[i] in vowels:
            print(f"{string[i]=} is a vowel")
            for j in range(i + 1, len(string) + 1):
                try:
                    kevin[string[i:j]] += 1
                except KeyError:
                    kevin[string[i:j]] = 1
                print(f"{kevin=}")
        else:
            print(f"{string[i]=} is a consonant")
            for j in range(i + 1, len(string) + 1):
                try:
                    stuart[string[i:j]] += 1
                except KeyError:
                    stuart[string[i:j]] = 1
                print(f"{stuart=}")
    print(f"{kevin=} {stuart=} final situation")
    kevin_sum = 0
    for k in kevin:
        kevin_sum += kevin[k]
    stuart_sum = 0
    for k in stuart:
        stuart_sum += stuart[k]
    print(f"{kevin_sum=} {stuart_sum=} sums")
    if kevin_sum > stuart_sum:
        print("Kevin %d" % kevin_sum)
    else:
        print("Stuart %d" % stuart_sum)


if __name__ == '__main__':
    s = input()
    minion_game(s)
def is_palindrome(s):
    for x in range(len(s)//2):
        if s[x] != s[-x-1]:
            return False
    else:
        return True


print(is_palindrome("aba"), "aba")
print(is_palindrome("abba"), "abba")
print(is_palindrome("abracadabra"), "abracadabra")

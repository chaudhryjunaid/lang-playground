def do_plus(a, b):
    if (type(a) != type(0) or type(b) != type(0)):
        raise TypeError('do_plus can only add ints.')
    return a + b
print(do_plus(1,2))

print(dir(do_plus))


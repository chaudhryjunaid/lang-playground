import re

small_case_reqd = input("Do you require small letters? ")
capital_case_reqd = input("Do you require capital letters? ")
digits_reqd = input("Do you require digits? ")
punctuation_reqd = input("Do you require punctuation? ")
plen = int(input("What should be the min length of the password? "))
passwd = input("Enter password to evaluate? ")
if not passwd:
    print("Empty password not allowed!")
    exit()
passwd_validated = True
if len(passwd) >= plen:
    print("Password passes length criteria")
else:
    print("Password must be at least %d chars long" % plen)
    passwd_validated = False
if small_case_reqd == "y" and re.match(r"^(?=.*[a-z]).*", passwd):
    print("small letters present as required.")
elif small_case_reqd == "y":
    print("small letters required but MISSING.")
    passwd_validated = False
if capital_case_reqd == "y" and re.match(r"^(?=.*[A-Z]).*", passwd):
    print("capital letters present as required.")
elif capital_case_reqd == "y":
    print("capital letters required but MISSING.")
    passwd_validated = False
if digits_reqd == "y" and re.match(r"^(?=.*[0-9]).*", passwd):
    print("digit letters present as required.")
elif digits_reqd == "y":
    print("digits required but MISSING.")
    passwd_validated = False
if punctuation_reqd == "y" and re.match(r"^(?=.*[*&^%$#@!]).*", passwd):
    print("punctuation letters present as required.")
elif punctuation_reqd == "y":
    print("punctuation required but MISSING.")
    passwd_validated = False

if passwd_validated:
    print("This password is secure according to your criteria!")
else:
    print("This password is INSECURE according to your criteria!")

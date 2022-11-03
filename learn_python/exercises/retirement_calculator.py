from datetime import date

current_age = int(input("What is your current age? "))
if not current_age or current_age <= 0:
    print("Please enter correct age.")
    exit()
retirement_age = int(input("At what age would you like to retire? "))
if not retirement_age or retirement_age < 0:
    print("Please enter a valid retirement age.")
    exit()
if (retirement_age < current_age):
    print("You can already retire!")
    exit()
current_year = date.today().year
years_until_retirement = retirement_age - current_age
retirement_year = current_year + years_until_retirement
print(f"You have {years_until_retirement} years left until you can retire\nIt's {current_year}, so you can retire in {retirement_year}")

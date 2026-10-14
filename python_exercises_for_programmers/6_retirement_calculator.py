from datetime import date

current_age = input('What is your current age? ')
retirement_age = input('At what age would you like to retire? ')

years_until_retirement = int(retirement_age) - int(current_age)
print(f'You have {years_until_retirement} left until you can retire.')

current_year = date.today().year
print(f"It's {current_year}, so you can retire in {current_year + years_until_retirement}")


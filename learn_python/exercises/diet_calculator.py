def base_metabolic_rate(weight_in_kg, age_in_years):
    weight_in_lbs = weight_in_kg * 2.2
    decades_above_20 = (age_in_years - 20) / 10
    bmr_at_20 = weight_in_lbs * 11
    bmr_at_age = bmr_at_20 - (bmr_at_20 * (0.02 * decades_above_20))
    return bmr_at_age


def print_diet(bmr):
    print(f"""
    You should take the following amounts of food groups per day:
    Fat: {bmr*0.25/9:.1f} grams
    Protein: {bmr*0.25/4:.1f} grams
    Carbs: {bmr*0.5/4:.1f} grams
    """)


def diet_calculator():
    weight_in_kg = int(input("Please enter weight in kg? "))
    age_in_years = int(input("Please enter age in years? "))
    bmr = base_metabolic_rate(weight_in_kg, age_in_years)
    print_diet(bmr)


diet_calculator()

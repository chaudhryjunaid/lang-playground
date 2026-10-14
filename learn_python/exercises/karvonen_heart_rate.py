age = int(input("Enter age (years)? "))
resting_hr = int(input("Enter resting heart rate (bpm)? "))
for intensity in range(55, 100, 5):
    karvonen_hr = ((220 - age) - resting_hr) * intensity / 100 + resting_hr
    print(f"{str(intensity)+'%':10}| {karvonen_hr:3} bpm")

def mx(*nums):
    m = nums[0]
    for i in nums:
        if i > m:
            m = i
    return m


print(mx(1, 2, 3, 4, 5))
print(mx(2, 4, 8, 6))
print(mx(2))

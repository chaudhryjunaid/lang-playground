def swap_ends(swap_fn, arr):
	return swap_fn(arr)

def swap_by_unpacking(arr):
	a, *middle, b = arr
	[*new_arr] = b, *middle, a
	return new_arr

def swap_directly(arr):
	[*new_arr] = arr
	new_arr[0], new_arr[-1] = new_arr[-1], new_arr[0]
	return new_arr

a = [1, 3, 5, 7, 9]
print(a, swap_ends(swap_by_unpacking, a))
print(a, swap_ends(swap_directly, a))

def bubble_sort(unsorted_arr):
    for i in range(len(unsorted_arr)):
        for j in range(len(unsorted_arr) - 1, i, -1):
            if (unsorted_arr[j] < unsorted_arr[j-1]):
                unsorted_arr[j-1], unsorted_arr[j] = unsorted_arr[j], unsorted_arr[j-1]
    return unsorted_arr


print(bubble_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]))

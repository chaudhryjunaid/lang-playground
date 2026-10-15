def sort_by_key(dict):
    dict_keys = []
    for k in dict:
        dict_keys.append(k)
    sorted_dict_keys = sorted(dict_keys)
    sorted_dict = {}
    for k in sorted_dict_keys:
        sorted_dict[k] = dict[k]
    return sorted_dict


print(sort_by_key({"b": "b", "c": "c", "a": "a"}))

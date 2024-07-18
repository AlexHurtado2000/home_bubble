# Hard-coded test input
user_input = "10010101"

# Separates each character in the user input into its own object in a list
indices_input = [int(char) for char in user_input]

# Reverses the objects into their original input direction.
indices_proper = list(reversed(indices_input))
print(indices_proper)


result_dict = {2**i: value for i, value in enumerate(indices_proper)}

print(result_dict)

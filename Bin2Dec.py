import sys

# Hard-coded test input
print("Please provide a binary input: ")
user_input = input()

if user_input.isnumeric() != True:
    print("Input not a number")
    sys.exit()

# Separates each character in the user input into its own object in a list
indices_input = [int(char) for char in user_input]

# Reverses the objects into their original input direction.
indices_proper = list(reversed(indices_input))
print(indices_proper)

# Adds each 0 or 1 indice in the correct orientation in a key:value
# pair alongside its appropriate base 2 header
result_dict = {2**i: value for i, value in enumerate(indices_proper)}

# Multplies the key and the value and adds them to a list
final_sum = 0
for key, value in result_dict.items():
    product = key * value
    final_sum += product

print(final_sum)

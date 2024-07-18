// 1. Get input
// 2. Check input is correct (<=8, number, in base2)
// 3. Reverse input and separate them into individual items in a matrix/dictionary type structure.
// 4. 2**i * items and then add them together

var bin_input = 10010101

function binary_check(binary_input){
  let character_count = binary_input.toString().length;
  if (character_count > 8) {
    console.log("Please input a binary input shorter than 8 characters.")
  };
};

function output_generator(unreversed){
  return (
    parseFloat(
      unreversed
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  )
  
};
let output = output_generator(bin_input);
console.log(output)

// 1. Get input
// 2. Check input is correct (<=8, number, in base2)
// 3. Reverse input and separate them into individual items in a matrix/dictionary type structure.
// 4. 2**i * items and then add them together

var bin_input = 10010101

function binary_check(binary_input, arr){
  let character_count = binary_input.toString().length;
  if (character_count > 8) {
    console.log("Please input a binary input shorter than 8 characters.")
  };

  for (let i = 2; i < character_count; i++) {
    let iterator = 0 + i;
    let added_val = Math.pow(2, iterator);
    arr.push(added_val);
    console.log(arr);
  };
  return arr

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

let bin_array = [1, 2];
let final_bin = output_generator(bin_input);
let checked_seq = binary_check(bin_input, bin_array);

function Bin2Dec(bin_input, bin_array) {
  var answer = 0;
  for (let bin in bin_input) {
    for (let multiplier in bin_array) {
      let dec = bin * multiplier;
      console.log(dec);
      var answer = answer + dec;
    }
  }
  return answer;
};

console.log("Before the last seq");
console.log(checked_seq);
let test_check = Bin2Dec(final_bin, checked_seq);
console.log(test_check);

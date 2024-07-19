// 1. Get input
// 2. Check input is correct (<=8, number, in base2)
// 3. Reverse input and separate them into individual items in a matrix/dictionary type structure.
// 4. 2**i * items and then add them together


function array_release(binary_input, arr){
  let character_count = binary_input.toString().length;
  for (let i = 2; i < character_count; i++) {
      let iterator = 0 + i;
      let added_val = Math.pow(2, iterator);
      arr.push(added_val);
  //     console.log(arr);
    };
    return arr

}



function binary_check(binary_input){
  let character_count = binary_input.toString().length;
  if (character_count > 8) {
    return false;
  } else if (character_count <= 8){
    return true;
  } 
  
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



function Bin2Dec(bin_input, bin_array) {
  var answer = 0;
  var bin_string = bin_input.toString()

  for (let i = 0; i < bin_string.length; i++) {
    let bin_int = Number(bin_string[i]);
    let multiplier = bin_array[i];
    let dec = bin_int * multiplier
    var answer = dec + answer;

  }

  return answer;
};

// console.log("Before the last seq");
// console.log(checked_seq);
let form = document.getElementById('bin-form')

let bin_array = [1, 2];


form.addEventListener('submit', (e) => {
  e.preventDefault()

  let bin_input = document.getElementById('bin').value;
  let resultDiv = document.getElementById('result');

  let final_bin = output_generator(bin_input);
  let checked_seq = array_release(bin_input, bin_array);

  let test_check = Bin2Dec(final_bin, checked_seq);

  let allowed = binary_check(bin_input)

  if (allowed === true) {
    resultDiv.textContent = 'Binary: ' + test_check;
  } else if (allowed === false){
    resultDiv.textContent = 'Please input a binary thats shorter than 8 chars'

  }
});

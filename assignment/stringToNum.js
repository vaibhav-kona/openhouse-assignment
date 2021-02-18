const NUMBER_STARTING_CHAR_CODE = 48;
const NUMBER_ENDING_CHAR_CODE = 57;

const CHAR_CODE_VS_NUMBER_MAPPING = {
  48: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
}

const convertStringToJs = function (str) {
  let keepTraversing = true;
  let numbers = [];

  // Make a list of the valid number char codes in the given string
  for (let i = 0; (i < str.length) && keepTraversing; i++) {
    const val = str[i];
    const valCharCode = val.charCodeAt(0);

    // Is value a number?
    if (valCharCode < NUMBER_STARTING_CHAR_CODE || valCharCode > NUMBER_ENDING_CHAR_CODE) {
      keepTraversing = false;
    } else {
      // console.log("val : ", val, val.charCodeAt(0));
      numbers.push(valCharCode);
    }
  }
  // console.log('numbers : ', numbers);

  // Construct the number from the individual char codes
  let mul = 1;
  let finalNum = 0;
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    finalNum += CHAR_CODE_VS_NUMBER_MAPPING[numbers[i]] * mul;
    mul *= 10;
  }

  // console.log('finalNum : ', finalNum);

  return finalNum;
}

let str = "42";
// let str = "0";
// let str = "42a";
// let str = "42a35";
// let str = "abc42";


console.log(convertStringToJs(str));
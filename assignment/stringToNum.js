const NUMBER_STARTING_CHAR_CODE = 48;
const NUMBER_ENDING_CHAR_CODE = 57;
const NEGATIVE_SYMBOL_CHAR_CODE = 45;

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

const convertStringToNum = function (str) {
  let keepTraversing = true;
  let charCodes = [];

  // Make a list of the valid number char codes in the given string
  for (let i = 0; (i < str.length) && keepTraversing; i++) {
    const val = str[i];
    const valCharCode = val.charCodeAt(0);

    // Is value a number?
    if ((valCharCode < NUMBER_STARTING_CHAR_CODE || valCharCode > NUMBER_ENDING_CHAR_CODE) && valCharCode !== NEGATIVE_SYMBOL_CHAR_CODE) {
      keepTraversing = false;
    } else {
      charCodes.push(valCharCode);
    }
  }

  // Construct the number from the individual char codes
  let mul = 1;
  let finalNum = 0;
  for (let i = charCodes.length - 1; i >= 0; i -= 1) {
    const charCode = charCodes[i];
    if (charCode !== NEGATIVE_SYMBOL_CHAR_CODE) {
      finalNum += CHAR_CODE_VS_NUMBER_MAPPING[charCode] * mul;
      mul *= 10;
    }
  }

  if (charCodes[0] === NEGATIVE_SYMBOL_CHAR_CODE) {
    finalNum = finalNum * -1;
  }

  return finalNum;
}

module.exports = convertStringToNum;
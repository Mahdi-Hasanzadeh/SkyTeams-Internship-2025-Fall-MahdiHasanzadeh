/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Reverse a number

 * Description: Reverse the digits of an integer.
    Example:
    Input:  1234
    Output: 4321

 */

import { isNumber } from "./utility.js";

export function reverseANumberDigits(number) {
  if (!isNumber(number)) return "provide number only";

  let numberAsString = number.toString();

  let lastIndex = numberAsString.length - 1;

  let result = "";

  for (let i = lastIndex; i >= 0; i--) {
    result += numberAsString[i];
  }

  return parseInt(result);
}

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Sum of digits

 * Description: Calculate the sum of all digits of a number.
    Example:
    Input:  12345
    Output: 15

 */

import { isNumber } from "./utility.js";

export function sumOfDigits(number) {
  if (!isNumber(number)) return "provide number only";

  let numberAsString = number.toString();

  let total = 0;
  for (let i = 0; i < numberAsString.length; i++) {
    total += parseInt(numberAsString[i]);
  }

  return total;
}

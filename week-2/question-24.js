/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Find GCD of two numbers

 * Description: Compute the greatest common divisor using repeated subtraction or the Euclidean algorithm.
    Example:
    Input:  12, 18
    Output: 6

 */

import { isNumber } from "./utility.js";

// Repeated subtraction method
export function getGreatestCommonDivisor(number1, number2) {
  if (!isNumber(number1) || !isNumber(number2)) return "provide numbers only";

  if (number1 == 0 && number2 == 0) return "infinite divisor";

  number1 = Math.abs(number1);
  number2 = Math.abs(number2);

  if (number1 == 0 || number2 == 0) return Math.max(number1, number2);

  while (number1 != number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }

  return number1;
}

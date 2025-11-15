/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Display all factors of a number

 * Description: Print all numbers that divide the given number exactly.
    Example:
    Input:  12
    Output: 1, 2, 3, 4, 6, 12

 */

import { isNumber } from "./utility.js";

export function getFactors(number) {
  if (!isNumber(number)) {
    throw new Error("provide number only");
  }

  let factors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      factors.push(i);
    }
  }

  return factors;
}

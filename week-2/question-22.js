/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Print even numbers in a range

 * Description: Input start and end values, print all even numbers between them.
    Example:
    Input:  1, 10
    Output: 2, 4, 6, 8, 10

 */

import { isNumber } from "./utility.js";

export function getEvenNumbers(start, end) {
  if (!isNumber(start) || !isNumber(end)) return "provide numbers only";

  let evenNumbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}

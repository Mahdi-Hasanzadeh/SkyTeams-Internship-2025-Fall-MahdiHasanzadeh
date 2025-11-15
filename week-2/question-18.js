/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Multiplication table of a number

 * Description: Print the multiplication table for a given number (up to 10 or N).
    Example:
    Input:  5
    Output:
    5 × 1 = 5
    5 × 2 = 10
    …
    5 × 10 = 50

 */

import { isNumber } from "./utility.js";

export function multiplicationTable(number, N = 10) {
  if (!isNumber(number) || !isNumber(N)) return "provide number only";

  let result = "";
  for (let i = 1; i <= N; i++) {
    result += `${i} * ${number} = ${i * number}\n`;
  }

  return result;
}

console.log(multiplicationTable(5, 5));

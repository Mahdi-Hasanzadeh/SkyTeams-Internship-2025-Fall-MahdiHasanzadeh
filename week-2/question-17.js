/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Sum of first N natural numbers

 * Description: Calculate and print the sum using a loop.   
    Example:
    Input:  5
    Output: 15

 */

import { isNumber } from "./utility.js";

export function sumOftNaturalNumbers(number) {
  if (!isNumber(number)) return "provide only number";

  let totatl = 0;
  for (let i = 1; i <= number; i++) {
    totatl += i;
  }

  return totatl;
}

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question:  Print numbers from 1 to 100

 * Description: Use a loop to print num\bers sequentially.
    Example:
    Output: 1, 2, 3, …, 100

 */

import { isNumber } from "./utility.js";

export function printNumbersSequentially(start, end) {
  if (!isNumber(start) || !isNumber(end)) {
    return "start and end should be number";
  }

  let numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return numbers.join(", ");
}

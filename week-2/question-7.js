/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Check whether a number is even or odd

 * Description: Determine if a number is divisible by 2.
    Example:
    Input:  7
    Output: Odd

 */

import { isNumber } from "./utility.js";

export function evenOrOdd(number) {
  if (!isNumber(number)) return "Not a number";

  if (number % 2 == 0) {
    return "Even";
  }

  return "Odd";
}

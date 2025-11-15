/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Count digits in a number

 * Description: Find how many digits are in a number.
    Example:
    Input:  786
    Output: 3

 */

import { isNumber } from "./utility.js";

export function countDigits(number) {
  if (!isNumber(number)) return "provide number only";

  return number.toString().length;
}

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Determine if a number is positive, negative, or zero

 * Description: Use if-else statements to categorize a number.
    Example:
    Input:  -3
    Output:  Negative

 */

import { isNumber } from "./utility.js";

export function determineSign(number) {
  if (!isNumber(number)) return "Not a number";

  if (number === 0) return "Zero";

  if (number > 0) return "Positive";

  if (number < 0) return "Negative";
}

console.log(determineSign(-0.5));

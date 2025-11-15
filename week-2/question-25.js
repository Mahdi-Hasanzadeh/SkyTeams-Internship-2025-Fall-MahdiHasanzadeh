/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-13

 * Question: Find LCM of two numbers

 * Description: Compute least common multiple using the relationship: LCM(a, b) = (a × b) / GCD(a, b)
    Example:
    Input:  12, 18
    Output: 36

 */

import { isNumber } from "./utility.js";
import { getGreatestCommonDivisor } from "./question-24.js";

export function getLeastCommonMultiple(number1, number2) {
  if (!isNumber(number1) || !isNumber(number2)) return "provide numbers only";

  //formula => LCM(a, b) = (a × b) / GCD(a, b)

  if (number1 == 0 && number2 == 0) return "undefined";

  number1 = Math.abs(number1);
  number2 = Math.abs(number2);

  if (number1 == 0 || number2 == 0) return Math.min(number1, number2);

  const GCD = getGreatestCommonDivisor(number1, number2);

  const LCM = (number1 * number2) / GCD;

  return LCM;
}

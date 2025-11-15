/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Check whether a number is prime

 * Description: Determine if a number is divisible only by 1 and itself.
    Example:
    Input:  17
    Output: Prime
    Input:  20
    Output: Not Prime

 */

import { isNumber } from "./utility.js";

export function isPrime(value) {
  if (!isNumber(value)) {
    throw new Error("provide number only");
  }

  if (value <= 0 || value === 1) {
    return false;
  }

  let totalFactors = 0;

  let isValuePrime = true;

  for (let i = 1; i <= value; i++) {
    if (value % i == 0) {
      totalFactors++;
    }

    if (totalFactors > 2) {
      isValuePrime = false;
      break;
    }
  }

  return isValuePrime;
}

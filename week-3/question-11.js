/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Generate all prime numbers up to N

 * Description: List all prime numbers up to a given limit using a loop.
    Example:
    Input:  10
    Output: 2, 3, 5, 7

 */

import { isPrime } from "./question-10.js";
import { isNumber } from "./utility.js";

// generate prime numbers up to (n)
export function getPrimes(n) {
  if (!isNumber(n)) {
    throw new Error("provide number only");
  }

  let primeNumbers = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

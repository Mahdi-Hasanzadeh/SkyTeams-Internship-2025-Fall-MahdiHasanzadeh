/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Fibonacci series up to N terms

 * Description: Generate the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8…) up to N terms.
    Example:
    Input:  7
    Output: 0, 1, 1, 2, 3, 5, 8

 */

import { isNumber } from "./utility.js";

// Fibonacci series calculation to find next element => Fn = F(n-1) + F(n-2)
export function fibonacciSeries(n) {
  if (!isNumber(n)) return "provide numbers only";

  if (n < 0) return "n should be positive";

  let fibonacciList = [];

  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      fibonacciList.push(i);
    } else {
      let value = fibonacciList[i - 1] + fibonacciList[i - 2];
      fibonacciList.push(value);
    }
  }

  return fibonacciList.join(", ");
}

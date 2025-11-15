/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Swap two variables without using a temporary variable

 * Description: Write a program to swap the values of two variables (e.g., a and b) without using a third variable.
    Example:
    Input:  a = 5, b = 10
    Output: a = 10, b = 5

 */

export function swapTwoVariables(a, b) {
  [a, b] = [b, a];

  return [a, b];
}

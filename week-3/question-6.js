/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Write a function to find the smallest element in an array

 * Description: Given an array of numbers, return the smallest value.
    Example:
    Input:  [2, 8, 5, 3, 9]
    Output: 2

 */

export function getMin(list) {
  if (list.length == 0) {
    return "empty list";
  }
  let min = list[0];

  for (let i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }

  return min;
}

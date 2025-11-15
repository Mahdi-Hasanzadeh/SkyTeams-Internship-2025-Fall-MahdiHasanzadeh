/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Write a function to find the largest element in an array

 * Description: Given an array of numbers, return the largest value.
    Example:
    Input:  [2, 8, 5, 3, 9]
    Output: 9

 */

export function getMax(list) {
  if (list.length == 0) {
    return "empty list";
  }
  let max = list[0];

  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }

  return max;
}

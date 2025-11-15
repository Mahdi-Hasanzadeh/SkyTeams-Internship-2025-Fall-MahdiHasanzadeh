/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Write a function to count occurrences of an element in an array

 * Description: Count how many times a given number appears in the array.
    Example:
    Input:  Array = [2, 3, 2, 5, 2], Element = 2
    Output: 3

 */

export function countOccurrences(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
}

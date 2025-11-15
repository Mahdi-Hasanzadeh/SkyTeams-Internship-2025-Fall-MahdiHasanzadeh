/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Write a function to find the sum of all elements in an array

 * Description: Calculate the total sum of all array elements.
    Example:
    Input:  [1, 2, 3, 4, 5]
    Output: 15

 */

export function calculateSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

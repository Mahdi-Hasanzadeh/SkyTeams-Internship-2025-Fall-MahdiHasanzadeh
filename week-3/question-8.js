/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Write a function to check if an array contains a specific element

 * Description: Determine if a given element exists in the array.
    Example:
    Input:  Array = [3, 6, 9, 12], Element = 6
    Output: Found

 */

export function isElementExist(list, element) {
  let isExist = false;

  for (let i = 0; i < list.length; i++) {
    if (element === list[i]) {
      isExist = true;
      break;
    }
  }

  return isExist;
}

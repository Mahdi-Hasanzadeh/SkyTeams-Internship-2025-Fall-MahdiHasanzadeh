/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-10

 * Question: Write a function that finds the largest number in a collection.

 */

export const findLargestNumber = (list) => {
  if (list.length == 0) {
    return "List is empty";
  }

  let maxNumber = list[0];

  for (let i = 0; i < list.length; i++) {
    if (list[i] > maxNumber) {
      maxNumber = list[i];
    }
  }

  return maxNumber;
};

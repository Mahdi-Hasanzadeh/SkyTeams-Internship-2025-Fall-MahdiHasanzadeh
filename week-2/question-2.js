/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-10

 * Question: Find the largest and smallest of three numbers

 * Description: Read three integers and print the largest and smallest.
    Example:
    Input: 3, 9, 5
    Output: Largest: 9, Smallest: 3

 */

// MinMax: Find the Minimum and Maximum from a list
export function MinMax(list) {
  if (list.length == 0) {
    return "List is empty";
  }

  let minimum = list[0];
  let maximum = list[1];

  // Using Same loop to find both minimum and maximum
  for (let i = 0; i < list.length; i++) {
    if (list[i] < minimum) {
      minimum = list[i];
    }

    if (list[i] > maximum) {
      maximum = list[i];
    }
  }

  return `Largest: ${maximum}, Smallets: ${minimum}`;
}

console.log(MinMax([3, 5, 9]));

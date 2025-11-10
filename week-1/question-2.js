/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-10

 * Question: Write a function that reverses a string/list.

 */

export function reverseString(str) {
  let reveresedString = "";

  for (let i = 0; i < str.length; i++) {
    reveresedString += str[str.length - (1 + i)];
  }

  return reveresedString;
}

export function revereseArray(arr) {
  let reversedArray = [];

  for (let i = 0; i < arr.length; i++) {
    reversedArray.push(arr[arr.length - (1 + i)]);
  }

  return reversedArray;
}

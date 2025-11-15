/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Question: Count vowels in a string

 * Description: Count the number of vowels (a, e, i, o, u) in a given string.
    Example:
    Input:  "SkyTeams Internship"
    Output: 5

 */

export function countVowels(str) {
  if (typeof str !== "string") {
    throw new Error("provide string only");
  }

  const VOWEL_LETTERS = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  let lowerCaseString = str.toLowerCase();

  let count = 0;
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] in VOWEL_LETTERS) {
      count++;
    }
  }
  return count;
}

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Check character type

 * Description: Input a character and determine if it’s a vowel, consonant, digit, or special symbol.
    Example:
    Input:  a
    Output: Vowel

 */

export function getCharacterType(char) {
  if (char.toString().length != 1) return "provide one character";

  if (typeof char != "string") {
    if (typeof char == "number") return "Digit";
    return "provide character as string";
  }

  const LETTERS = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const DIGITS = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  if (char.toLowerCase() in LETTERS) {
    switch (char.toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u": {
        return "Vowel";
      }
      default: {
        return "Consonant";
      }
    }
  } else if (char in DIGITS) {
    return "Digit";
  } else {
    return "Special symbol";
  }
}

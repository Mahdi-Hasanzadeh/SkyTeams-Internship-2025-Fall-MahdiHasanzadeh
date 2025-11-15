/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Question: Triangle validity and type

 * Description: Given three sides, determine if they form a valid triangle and if it’s equilateral,
    isosceles, or scalene.
    Rule: Sum of any two sides > third side.
    Example:
    Input:  3, 4, 5
    Output: Valid triangle, Scalene

 */

import { isNumber } from "./utility.js";

export function getTriangleValidityAndType(side1, side2, side3) {
  if (!isNumber(side1) || !isNumber(side2) || !isNumber(side3)) {
    return "sides should be number";
  }

  if (side1 <= 0 || side2 <= 0 || side3 <= 0) return "Invalid triangle";

  if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1) {
    let valid = "Valid triangle, ";

    if ((side1 == side2) == side3) {
      valid += "Equilateral";
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
      valid += "Isosceles";
    } else {
      valid += "Scalene";
    }

    return valid;
  }

  return "Invalid triangle";
}

console.log(getTriangleValidityAndType(1, 1, 3));

console.log(getTriangleValidityAndType(1, 1, -11));

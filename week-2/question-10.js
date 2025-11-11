/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Leap Year Checker

 * Description: Determine if a given year is a leap year.
    Rule: Year divisible by 4 → leap year, except centuries not divisible by 400.
    Example:
    Input:  2000
    Output: Leap year
    Input:  1900
    Output: Not leap year

 */

import { isNumber } from "./utility.js";
export function leapYearChecker(year) {
  if (!isNumber(year)) return "year is not a number";

  if (year < 0) return "year can not be negative";

  if (year % 4 != 0) return "Not leap year";

  if (year % 100 == 0 && year % 400 != 0) return "Not leap year";
  else return "Leap year";
}

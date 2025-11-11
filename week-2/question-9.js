/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question:  Grade Calculator (0–100 → A–F)

 * Description: Input a student’s marks (0–100) and print the grade based on a scale.
    Example:
    Input:  85
    Output: B

 */

import { isNumber } from "./utility.js";

export function gradeCalculator(mark) {
  if (!isNumber(mark)) return "mark is not a number";

  if (mark < 0 || mark > 100) return "Invalid mark range";

  if (mark <= 100 && mark > 85) return "A";

  if (mark <= 85 && mark > 75) return "B";

  if (mark <= 75 && mark > 65) return "C";

  if (mark <= 65 && mark > 60) return "D";

  if (mark <= 60 && mark >= 55) return "E";

  if (mark < 55) return "F";
}

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for printNumbersSequentially function

 * Question:  Print numbers from 1 to 100

 * Description: Use a loop to print num\bers sequentially.
    Example:
    Output: 1, 2, 3, …, 100

 */

import { describe, expect, it } from "vitest";
import { printNumbersSequentially } from "./question-16.js";

describe("Print numbers from 1 to 100", () => {
  it("should return (start and end should be number)", () => {
    expect(printNumbersSequentially("a", 100)).toBe(
      "start and end should be number"
    );

    expect(printNumbersSequentially(1, "k")).toBe(
      "start and end should be number"
    );
  });

  it("should return result correctly", () => {
    expect(printNumbersSequentially(1, 100)).toBe(
      "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100"
    );
  });
});

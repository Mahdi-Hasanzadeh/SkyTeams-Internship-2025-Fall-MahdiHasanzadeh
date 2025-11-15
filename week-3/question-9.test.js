/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for countOccurrences function

 * Question: Write a function to count occurrences of an element in an array

 * Description: Count how many times a given number appears in the array.
    Example:
    Input:  Array = [2, 3, 2, 5, 2], Element = 2
    Output: 3

 */

import { describe, expect, it } from "vitest";
import { countOccurrences } from "./question-9.js";

describe("count occurrences of an element in an array", () => {
  it("should return correct result", () => {
    expect(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4)).toBe(3);

    expect(countOccurrences(["mahdi", "karim", "karim"], "karim")).toBe(2);

    expect(countOccurrences([20, 40, 60, 80], 20.5)).toBe(0);

    expect(countOccurrences([1, 2, 3, 4, 5], 10)).toBe(0);
  });
});

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for calculateSum function

 * Question: Write a function to find the sum of all elements in an array

 * Description: Calculate the total sum of all array elements.
    Example:
    Input:  [1, 2, 3, 4, 5]
    Output: 15

 */

import { describe, expect, it } from "vitest";
import { calculateSum } from "./question-7.js";

describe("sum of all elements in an array", () => {
  it("should return correct result", () => {
    expect(calculateSum([])).toBe(0);

    expect(calculateSum([-1, -2, 3, 5])).toBe(5);

    expect(calculateSum([5, 4, 3, 2, 1])).toBe(15);

    expect(calculateSum([12])).toBe(12);
  });
});

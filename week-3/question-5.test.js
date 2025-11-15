/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for getMax function

 * Question: Write a function to find the largest element in an array

 * Description: Given an array of numbers, return the largest value.
    Example:
    Input:  [2, 8, 5, 3, 9]
    Output: 9

 */

import { describe, expect, it } from "vitest";
import { getMax } from "./question-5.js";

describe("largest element in an array", () => {
  it("should return (empty list) if the list length is zero", () => {
    expect(getMax([])).toBe("empty list");
  });

  it("should return correct result", () => {
    expect(getMax([1, 2, 3, 5])).toBe(5);

    expect(getMax([1, -20, 17, -5])).toBe(17);

    expect(getMax([-20, -15, -10, 0])).toBe(0);

    expect(getMax([-12, -112, -3, -5])).toBe(-3);
  });
});

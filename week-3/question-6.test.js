/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for getMin function

 * Question: Write a function to find the smallest element in an array

 * Description: Given an array of numbers, return the smallest value.
    Example:
    Input:  [2, 8, 5, 3, 9]
    Output: 2

 */

import { describe, expect, it } from "vitest";
import { getMin } from "./question-6.js";

describe("smallest element in an array", () => {
  it("should return (empty list) if the list length is zero", () => {
    expect(getMin([])).toBe("empty list");
  });

  it("should return correct result", () => {
    expect(getMin([1, 2, 3, 5])).toBe(1);

    expect(getMin([1, -20, 17, -5])).toBe(-20);

    expect(getMin([-45, -15, -10, 0])).toBe(-45);

    expect(getMin([-12, -112, -3, -5])).toBe(-112);
  });
});

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for sumOfDigits function

 * Question: Sum of digits

 * Description: Calculate the sum of all digits of a number.
    Example:
    Input:  123
    Output: 6

 */

import { describe, expect, it } from "vitest";
import { sumOfDigits } from "./question-3.js";

describe("Sum of digits", () => {
  it("should return error(provide number only)", () => {
    expect(sumOfDigits("ab")).toBe("provide number only");
  });

  it("should return correct result", () => {
    expect(sumOfDigits(123)).toBe(6);
    expect(sumOfDigits(101)).toBe(2);
    expect(sumOfDigits(345)).toBe(12);
  });
});

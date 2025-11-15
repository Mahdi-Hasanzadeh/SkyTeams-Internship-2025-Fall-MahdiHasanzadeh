/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for calculateSimpleAndCompoundInterest function

 * Question: Compute Simple and Compound Interest
 
 * Description: Given Principal (P), Rate (R), and Time (T), compute:
    Simple Interest = (P × R × T) / 100
    Compound Interest = P × ((1 + R/100) ^ T - 1)
    Example:
    Input:  P = 1000, R = 5, T = 2
    Output: SI = 100, CI ≈ 102.5

 */

import { describe, expect, it } from "vitest";
import { calculateSimpleAndCompoundInterest } from "./question-5.js";

describe("Simple & Compound Interest", () => {
  it("should return (provide number only) if value is not a number", () => {
    expect(calculateSimpleAndCompoundInterest("ld", 2, 2)).toBe(
      "provide number only"
    );

    expect(calculateSimpleAndCompoundInterest(2, "hdf", 2)).toBe(
      "provide number only"
    );

    expect(calculateSimpleAndCompoundInterest(2, 2, "dasf")).toBe(
      "provide number only"
    );
  });

  it("should return Simple and Compound Interest", () => {
    expect(calculateSimpleAndCompoundInterest(1000, 5, 2)).toStrictEqual([
      100, 102.5,
    ]);

    expect(calculateSimpleAndCompoundInterest(3000, 0.5, 2)).toStrictEqual([
      30, 30.07,
    ]);
  });
});

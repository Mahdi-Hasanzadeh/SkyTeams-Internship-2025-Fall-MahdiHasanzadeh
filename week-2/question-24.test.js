/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test:Write test for getGreatestCommonDivisor function

 * Question: Find GCD of two numbers

 * Description: Compute the greatest common divisor using repeated subtraction or the Euclidean algorithm.
    Example:
    Input:  12, 18
    Output: 6

 */

import { describe, expect, it } from "vitest";
import { getGreatestCommonDivisor } from "./question-24.js";

describe("Find GCD of two numbers", () => {
  it("should return error", () => {
    expect(getGreatestCommonDivisor("a", 12)).toBe("provide numbers only");

    expect(getGreatestCommonDivisor(23, "b")).toBe("provide numbers only");

    expect(getGreatestCommonDivisor(0, 0)).toBe("infinite divisor");
  });

  it("should return correct result", () => {
    expect(getGreatestCommonDivisor(12, 18)).toBe(6);

    expect(getGreatestCommonDivisor(13, 18)).toBe(1);
  });
});

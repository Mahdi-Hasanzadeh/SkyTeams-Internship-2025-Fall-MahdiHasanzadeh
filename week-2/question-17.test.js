/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for sumOftNaturalNumbers function

 * Question: Sum of first N natural numbers

 * Description: Calculate and print the sum using a loop.   
    Example:
    Input:  5
    Output: 15

 */

import { describe, expect, it } from "vitest";
import { sumOftNaturalNumbers } from "./question-17.js";

describe("Sum of first N natural numbers", () => {
  it("should return (provide only number)", () => {
    expect(sumOftNaturalNumbers("a")).toBe("provide only number");
  });

  it("should return correct result", () => {
    expect(sumOftNaturalNumbers(5)).toBe(15);
  });

  it("should return correct result", () => {
    expect(sumOftNaturalNumbers(6)).toBe(21);
  });
});

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for swapTwoVariables function

 * Question: Swap two variables without using a temporary variable

 * Description: Write a program to swap the values of two variables (e.g., a and b) without using a third variable.
    Example:
    Input:  a = 5, b = 10
    Output: a = 10, b = 5

 */

import { describe, expect, it } from "vitest";
import { swapTwoVariables } from "./question-1";

describe("Swap two variables", () => {
  it("should return correct result", () => {
    let a = 10;
    let b = 5;
    expect(swapTwoVariables(5, 10)).toBe(`a = ${a}, b = ${b}`);
  });
});

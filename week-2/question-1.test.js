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
    expect(swapTwoVariables(5, 10)).toStrictEqual([10, 5]);
    expect(swapTwoVariables(0, -2)).toStrictEqual([-2, 0]);
    expect(swapTwoVariables(-18, -10)).toStrictEqual([-10, -18]);
  });
});

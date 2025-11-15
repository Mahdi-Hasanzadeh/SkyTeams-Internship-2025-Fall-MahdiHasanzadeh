/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for fibonacciSeries function

 * Question: Fibonacci series up to N terms

 * Description: Generate the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8…) up to N terms.
    Example:
    Input:  7
    Output: 0, 1, 1, 2, 3, 5, 8

 */

import { describe, expect, it } from "vitest";
import { fibonacciSeries } from "./question-23.js";

describe("Fibonacci series up to N terms", () => {
  it("should return error", () => {
    expect(fibonacciSeries("a")).toBe("provide numbers only");

    expect(fibonacciSeries(-5)).toBe("n should be positive");
  });

  it("should return correct result", () => {
    expect(fibonacciSeries(7)).toStrictEqual([0, 1, 1, 2, 3, 5, 8]);

    expect(fibonacciSeries(0)).toStrictEqual([]);

    expect(fibonacciSeries(1)).toStrictEqual([0]);

    expect(fibonacciSeries(4)).toStrictEqual([0, 1, 1, 2]);
  });
});

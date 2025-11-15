/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for getEvenNumbers function

 * Question: Print even numbers in a range

 * Description: Input start and end values, print all even numbers between them.
    Example:
    Input:  1, 10
    Output: 2, 4, 6, 8, 10

 */

import { describe, expect, it } from "vitest";
import { getEvenNumbers } from "./question-22.js";

describe("Print even numbers in a range", () => {
  it("should return error(provide numbers only)", () => {
    expect(getEvenNumbers("s", 2)).toBe("provide numbers only");
  });

  it("should return error(provide numbers only)", () => {
    expect(getEvenNumbers(2, "a")).toBe("provide numbers only");
  });

  it("should return error(provide numbers only)", () => {
    expect(getEvenNumbers("2", "a")).toBe("provide numbers only");
  });

  it("should return correct result", () => {
    expect(getEvenNumbers(1, 10)).toStrictEqual([2, 4, 6, 8, 10]);
  });

  it("should return correct result", () => {
    expect(getEvenNumbers(5, 10)).toStrictEqual([6, 8, 10]);
  });
});

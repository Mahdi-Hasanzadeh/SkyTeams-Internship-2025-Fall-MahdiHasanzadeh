/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for countDigits function

 * Question: Count digits in a number

 * Description: Find how many digits are in a number.
    Example:
    Input:  786
    Output: 3

 */

import { describe, expect, it } from "vitest";
import { countDigits } from "./question-20.js";

describe("Count digits in a number", () => {
  it("should return error (provide number only)", () => {
    expect(countDigits("a")).toBe("provide number only");
  });

  it("should return correct result", () => {
    expect(countDigits(1234)).toBe(4);
  });

  it("should return correct result", () => {
    expect(countDigits(22)).toBe(2);
  });
});

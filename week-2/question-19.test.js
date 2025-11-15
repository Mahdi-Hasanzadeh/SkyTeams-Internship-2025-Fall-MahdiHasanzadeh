/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for reverseANumberDigits function

 * Question: Reverse a number

 * Description: Reverse the digits of an integer.
    Example:
    Input:  1234
    Output: 4321

 */

import { describe, expect, it } from "vitest";
import { reverseANumberDigits } from "./question-19.js";

describe("Reverse a number", () => {
  it("should return (provide number only)", () => {
    expect(reverseANumberDigits("da3")).toBe("provide number only");
  });

  it("should return reversed number", () => {
    expect(reverseANumberDigits(1234)).toBe(4321);
  });
});

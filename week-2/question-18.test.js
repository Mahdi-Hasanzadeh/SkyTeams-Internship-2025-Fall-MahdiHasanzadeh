/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for multiplicationTable function

 * Question: Multiplication table of a number

 * Description: Print the multiplication table for a given number (up to 10 or N).
    Example:
    Input:  5
    Output:
    5 × 1 = 5
    5 × 2 = 10
    …
    5 × 10 = 50

 */

import { describe, expect, it } from "vitest";
import { multiplicationTable } from "./question-18.js";

describe("Multiplication table of a number", () => {
  it("should return (provide number only)", () => {
    expect(multiplicationTable("a")).toBe("provide number only");
  });

  it("should return (provide number only)", () => {
    expect(multiplicationTable(2, "2")).toBe("provide number only");
  });

  it("should return correct result", () => {
    const expectedResult = `1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
`;
    expect(multiplicationTable(5, 3)).toBe(expectedResult);
  });
});

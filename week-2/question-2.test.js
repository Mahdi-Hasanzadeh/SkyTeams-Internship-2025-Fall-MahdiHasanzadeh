/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-10

 * Test: Write test for function MinMax

 * Question: Find the largest and smallest of three numbers

 * Description: Read three integers and print the largest and smallest.
    Example:
    Input: 3, 9, 5
    Output: Largest: 9, Smallest: 3

 */

import { describe, it, expect } from "vitest";
import { MinMax } from "./question-2.js";

describe("MinMax method", () => {
  it("should find the largest and smallets numbers", () => {
    expect(MinMax([2, 9, 5])).toBe(`Largest: ${9}, Smallets: ${2}`);
    expect(MinMax([4, 12, 0])).toBe(`Largest: ${12}, Smallets: ${0}`);
  });

  it("should return (List is empty) if the list lenght is zero", () => {
    expect(MinMax([])).toBe("List is empty");
  });
});

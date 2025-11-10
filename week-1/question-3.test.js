/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-10

 * Question: Write a test for function findLargestNumber.

 */

import { describe, expect, it } from "vitest";
import { findLargestNumber } from "./question-3.js";

describe("Arrays", () => {
  it("should find the largest number in an array", () => {
    expect(findLargestNumber([1, 2, 30, 32, 35, 4, 5, 6])).toBe(35);
  });

  it("should return (List is empty) if array is empty", () => {
    expect(findLargestNumber([])).toBe("List is empty");
  });
});

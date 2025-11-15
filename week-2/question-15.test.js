/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-12

 * Test: Write test for getTriangleValidityAndType function

 * Question: Triangle validity and type

 * Description: Given three sides, determine if they form a valid triangle and if it’s equilateral,
    isosceles, or scalene.
    Rule: Sum of any two sides > third side.
    Example:
    Input:  3, 4, 5
    Output: Valid triangle, Scalene

 */

import { describe, expect, it } from "vitest";
import { getTriangleValidityAndType } from "./question-15.js";

describe("Triangle validity and type", () => {
  it("should return (sides should be number)", () => {
    expect(getTriangleValidityAndType("1", 1, 1)).toBe(
      "sides should be number"
    );

    expect(getTriangleValidityAndType(2, "d", 1)).toBe(
      "sides should be number"
    );

    expect(getTriangleValidityAndType(2, 1, "k")).toBe(
      "sides should be number"
    );
  });

  it("should return (Invalid triangle)", () => {
    expect(getTriangleValidityAndType(1, 1, 0)).toBe("Invalid triangle");
    expect(getTriangleValidityAndType(0, -1, 0)).toBe("Invalid triangle");
    expect(getTriangleValidityAndType(1, 0, 10)).toBe("Invalid triangle");
  });

  it("should return (Valid triangle)", () => {
    expect(getTriangleValidityAndType(1, 1, 1)).toBe(
      "Valid triangle, Equilateral"
    );

    expect(getTriangleValidityAndType(1, 1, 2)).toBe(
      "Valid triangle, Isosceles"
    );

    expect(getTriangleValidityAndType(3, 1, 2)).toBe("Valid triangle, Scalene");
  });
});

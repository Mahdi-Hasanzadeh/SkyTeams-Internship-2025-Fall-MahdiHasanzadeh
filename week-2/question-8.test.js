/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for determineSign function

 * Question: Determine if a number is positive, negative, or zero

 * Description: Use if-else statements to categorize a number.
    Example:
    Input:  -3
    Output:  Negative

 */

import { describe, expect, it } from "vitest";
import { determineSign } from "./question-8.js";

describe("Determine sign of number", () => {
  it("should return (Not a number) if value is not a number", () => {
    expect(determineSign("2dkjk")).toBe("Not a number");
  });

  it("should return Zero if number is zero", () => {
    expect(determineSign(0)).toBe("Zero");
  });

  it("should return Positive if number is greater than zero", () => {
    expect(determineSign(5)).toBe("Positive");
  });

  it("should return Negative if number is less than zero", () => {
    expect(determineSign(-5)).toBe("Negative");
  });
});

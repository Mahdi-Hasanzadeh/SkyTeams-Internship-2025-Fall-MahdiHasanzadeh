/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for evenOrOdd function

 * Question: Check whether a number is even or odd

 * Description: Determine if a number is divisible by 2.
    Example:
    Input:  7
    Output: Odd

 */

import { describe, expect, it } from "vitest";
import { evenOrOdd } from "./question-7.js";

describe("Even or Odd", () => {
  it("should return (Not a number) if value is not a number", () => {
    expect(evenOrOdd("2dkjk")).toBe("Not a number");
  });

  it("should return Even if number is divisible by 2", () => {
    expect(evenOrOdd(0)).toBe("Even");
  });

  it("should return Even if number is divisible by 2", () => {
    expect(evenOrOdd(98)).toBe("Even");
  });

  it("should return Odd if number is not divisible by 2", () => {
    expect(evenOrOdd(1)).toBe("Odd");
  });

  it("should return Odd if number is not divisible by 2", () => {
    expect(evenOrOdd(101)).toBe("Odd");
  });
});

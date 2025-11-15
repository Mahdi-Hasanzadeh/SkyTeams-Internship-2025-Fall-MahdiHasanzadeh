/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for leapYearChecker function

 * Question: Leap Year Checker

 * Description: Determine if a given year is a leap year.
    Rule: Year divisible by 4 → leap year, except centuries not divisible by 400.
    Example:
    Input:  2000
    Output: Leap year
    Input:  1900
    Output: Not leap year

 */

import { describe, expect, it } from "vitest";
import { leapYearChecker } from "./question-10.js";

describe("Leap year checker", () => {
  it("should return (year is not a number)", () => {
    expect(leapYearChecker("da")).toBe("year is not a number");
  });

  it("should return (year can not be negative)", () => {
    expect(leapYearChecker(-2000)).toBe("year can not be negative");
  });

  it("should return Leap year", () => {
    expect(leapYearChecker(2000)).toBe("Leap year");
  });

  it("should return Not leap year", () => {
    expect(leapYearChecker(1900)).toBe("Not leap year");
  });
});

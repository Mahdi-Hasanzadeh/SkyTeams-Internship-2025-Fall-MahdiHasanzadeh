/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for monthNameAndDays function

 * Question: Month name & number of days using switch-case

 * Description: Input a month number (1–12) and display its name and number of days.
    Example:
    Input:  2
    Output: February, 28 or 29 days

 */

import { describe, expect, it } from "vitest";
import { monthNameAndDays } from "./question-13.js";

describe("Month name & days", () => {
  it("should return (provide number only)", () => {
    expect(monthNameAndDays("jd")).toBe("provide number only");
  });

  it("should return (month must be between 1-12)", () => {
    expect(monthNameAndDays(0)).toBe("month must be between 1-12");
  });

  it("should return (month must be between 1-12)", () => {
    expect(monthNameAndDays(13)).toBe("month must be between 1-12");
  });

  it("should return (month must be between 1-12)", () => {
    expect(monthNameAndDays(-5)).toBe("month must be between 1-12");
  });

  it("should return month info correctly", () => {
    let monthName = "May";
    let days = 31;
    expect(monthNameAndDays(5)).toBe(`${monthName}, ${days} days`);
  });

  it("should return month info correctly", () => {
    let monthName = "December";
    let days = 31;
    expect(monthNameAndDays(12)).toBe(`${monthName}, ${days} days`);
  });
});

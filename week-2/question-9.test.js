/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write a test for gradeCalculator function

 * Question:  Grade Calculator (0–100 → A–F)

 * Description: Input a student’s marks (0–100) and print the grade based on a scale.
    Example:
    Input:  85
    Output: B

 */

import { describe, expect, it } from "vitest";
import { gradeCalculator } from "./question-9.js";

describe("Grade Calculator", () => {
  it("should return (mark is not a number)", () => {
    expect(gradeCalculator("kd23")).toBe("mark is not a number");
  });
  it("should return (Invalid mark range)", () => {
    expect(gradeCalculator(-10)).toBe("Invalid mark range");
  });

  it("should return (Invalid mark range)", () => {
    expect(gradeCalculator(101)).toBe("Invalid mark range");
  });

  it("should return F", () => {
    expect(gradeCalculator(54)).toBe("F");
  });

  it("should return E", () => {
    expect(gradeCalculator(55)).toBe("E");
  });

  it("should return D", () => {
    expect(gradeCalculator(65)).toBe("D");
  });

  it("should return C", () => {
    expect(gradeCalculator(66)).toBe("C");
  });

  it("should return B", () => {
    expect(gradeCalculator(85)).toBe("B");
  });

  it("should return A", () => {
    expect(gradeCalculator(97)).toBe("A");
  });

  it("should return A", () => {
    expect(gradeCalculator(100)).toBe("A");
  });
});

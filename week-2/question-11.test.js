/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for calculator function

 * Question: Simple Calculator using switch-case

 * Description: Input two numbers and an operator (+, -, *, /) and compute the result.
    Example:
    Input:  5, 3, +
    Output: 8

 */

import { describe, expect, it } from "vitest";
import { calculator } from "./question-11.js";

describe("Calculator", () => {
  it("should return (provide number only)", () => {
    expect(calculator("1dd", 12, "+")).toBe("provide number only");
  });

  it("should return (provide number only)", () => {
    expect(calculator(12, "mahdi", "+")).toBe("provide number only");
  });

  it("should return (Invalid operator)", () => {
    expect(calculator(12, 12, "kda")).toBe("Invalid operator");
  });

  it("should return (can not divide by 0)", () => {
    expect(calculator(12, 0, "/")).toBe("can not divide by 0");
  });

  it("should return result correctly", () => {
    expect(calculator(12, 3.5, "/")).toBe(3.43);
  });

  it("should return result correctly", () => {
    expect(calculator(12, 4, "*")).toBe(48);
  });

  it("should return result correctly", () => {
    expect(calculator(12, -3, "+")).toBe(9);
  });

  it("should return result correctly", () => {
    expect(calculator(12, -3, "-")).toBe(15);
  });
});

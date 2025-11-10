/**
 * Author: Mahdi Hasanzadeh
  
 * Date: 2025-11-10

 * Question: Write a test for function addTwoNumbers

 */

import { describe, it, expect } from "vitest";
import { addTwoNumbers } from "./question-1.js";

describe("addTwoNumbers method", () => {
  it("should return the sum of two numbers", () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
    expect(addTwoNumbers(1, 0)).toBe(1);
  });

  it("should return negative if numbers are negative", () => {
    expect(addTwoNumbers(-1, -2)).toBe(-3);
  });
});

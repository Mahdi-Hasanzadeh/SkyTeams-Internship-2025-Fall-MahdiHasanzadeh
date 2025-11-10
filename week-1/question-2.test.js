/**
 * Author: Mahdi Hasanzadeh
 
 * Date: 2025-11-10

 * Question: Write a test for function reverseString and revereseArray

 */

import { describe, expect, it } from "vitest";
import { revereseArray, reverseString } from "./question-2.js";

describe("reverse methods", () => {
  it("should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should reverse an array", () => {
    expect(revereseArray([1, 2, 3])).toStrictEqual([3, 2, 1]);
  });
});

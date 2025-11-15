/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for isElementExist function

 * Question: Write a function to check if an array contains a specific element

 * Description: Determine if a given element exists in the array.
    Example:
    Input:  Array = [3, 6, 9, 12], Element = 6
    Output: Found

 */

import { describe, expect, it } from "vitest";
import { isElementExist } from "./question-8.js";

describe("check if an array contains a specific element", () => {
  it("should return correct result", () => {
    expect(isElementExist([1, 2, 3], 0)).toBe(false);

    expect(isElementExist([13, -5, 38], -5)).toBe(true);

    expect(isElementExist(["mahdi", "123", "karim"], "mahdi")).toBe(true);

    expect(isElementExist(["mahdi", "123", "karim"], "321")).toBe(false);
  });
});

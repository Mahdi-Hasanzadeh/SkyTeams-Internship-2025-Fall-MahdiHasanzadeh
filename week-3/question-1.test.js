/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for countVowels function

 * Question: Count vowels in a string

 * Description: Count the number of vowels (a, e, i, o, u) in a given string.
    Example:
    Input:  "SkyTeams Internship"
    Output: 5

 */

import { describe, expect, it } from "vitest";
import { countVowels } from "./question-1.js";

describe("Count vowels in a string", () => {
  it("should throw error", () => {
    expect(() => {
      countVowels(123);
    }).toThrowError(Error, "provide string only");

    expect(() => {
      countVowels({});
    }).toThrowError(Error, "provide string only");

    expect(() => {
      countVowels([]);
    }).toThrowError(Error, "provide string only");
  });

  it("should return correct result", () => {
    expect(countVowels("SkyTeams Internship")).toBe(5);
    expect(countVowels("mahdi")).toBe(2);
    expect(countVowels("hasanzadeh")).toBe(4);
  });
});

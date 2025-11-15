/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for getPrimes functions

 * Question: Generate all prime numbers up to N

 * Description: List all prime numbers up to a given limit using a loop.
    Example:
    Input:  10
    Output: 2, 3, 5, 7

 */

import { describe, expect, it } from "vitest";
import { getPrimes } from "./question-11.js";

describe("Generate all prime numbers up to N", () => {
  it("should throw error", () => {
    expect(() => {
      getPrimes("a");
    }).toThrowError(Error, "provide number only");

    expect(() => {
      getPrimes({});
    }).toThrowError(Error, "provide number only");

    expect(() => {
      getPrimes([]);
    }).toThrowError(Error, "provide number only");
  });

  it("should return correct result", () => {
    expect(getPrimes(1)).toStrictEqual([]);
    expect(getPrimes(2)).toStrictEqual([2]);
    expect(getPrimes(5)).toStrictEqual([2, 3, 5]);
    expect(getPrimes(10)).toStrictEqual([2, 3, 5, 7]);
    expect(getPrimes(15)).toStrictEqual([2, 3, 5, 7, 11, 13]);
    expect(getPrimes(17)).toStrictEqual([2, 3, 5, 7, 11, 13, 17]);
  });
});

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for isPrime function

 * Question: Check whether a number is prime

 * Description: Determine if a number is divisible only by 1 and itself.
    Example:
    Input:  17
    Output: Prime
    Input:  20
    Output: Not Prime

 */

import { describe, expect, it } from "vitest";
import { isPrime } from "./question-10";

describe("prime numbers", () => {
  it("should throw error", () => {
    expect(() => {
      isPrime("a");
    }).toThrowError(Error, "provide number only");

    expect(() => {
      isPrime({});
    }).toThrowError(Error, "provide number only");

    expect(() => {
      isPrime([]);
    }).toThrowError(Error, "provide number only");
  });

  it("should return correct result", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(97)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(31)).toBe(true);
  });
});

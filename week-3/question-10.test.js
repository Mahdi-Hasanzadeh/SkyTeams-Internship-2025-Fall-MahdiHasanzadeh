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
    let errors = ["a", {}, []];

    errors.forEach((item) => {
      expect(() => {
        isPrime(item);
      }).toThrowError(Error, "provide number only");
    });
  });

  it("should return correct result", () => {
    let primes = [2, 3, 17, 97, 11, 31];
    primes.forEach((item) => {
      expect(isPrime(item)).toBe(true);
    });

    let nonPrimes = [0, 1, 4];
    nonPrimes.forEach((item) => {
      expect(isPrime(item)).toBe(false);
    });
  });
});

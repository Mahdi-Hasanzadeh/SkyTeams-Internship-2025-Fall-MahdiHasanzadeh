/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-15

 * Test: Write test for getFactors function

 * Question: Display all factors of a number

 * Description: Print all numbers that divide the given number exactly.
    Example:
    Input:  12
    Output: 1, 2, 3, 4, 6, 12

 */

import { describe, expect, it } from "vitest";
import { getFactors } from "./question-4";

describe("Display all factors of a number", () => {
  it("should throw error", () => {
    expect(() => {
      getFactors("a2");
    }).toThrowError("provide number only");

    expect(() => {
      getFactors({});
    }).toThrowError("provide number only");

    expect(() => {
      getFactors([]);
    }).toThrowError("provide number only");
  });

  it("should return the correct result", () => {
    expect(getFactors(0)).toStrictEqual([]);

    expect(getFactors(1)).toStrictEqual([1]);

    expect(getFactors(2)).toStrictEqual([1, 2]);

    expect(getFactors(3)).toStrictEqual([1, 3]);

    expect(getFactors(4)).toStrictEqual([1, 2, 4]);

    expect(getFactors(12)).toStrictEqual([1, 2, 3, 4, 6, 12]);

    expect(getFactors(24)).toStrictEqual([1, 2, 3, 4, 6, 8, 12, 24]);
  });
});

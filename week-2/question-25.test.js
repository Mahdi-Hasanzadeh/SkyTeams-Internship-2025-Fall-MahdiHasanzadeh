/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-13

 * Test: Write test for getLeastCommonMultiple function

 * Question: Find LCM of two numbers

 * Description: Compute least common multiple using the relationship: LCM(a, b) = (a × b) / GCD(a, b)
    Example:
    Input:  12, 18
    Output: 36

 */

import { describe, expect, it } from "vitest";
import { getLeastCommonMultiple } from "./question-25";

describe("Find LCM of two numbers", () => {
  it("should return error", () => {
    expect(getLeastCommonMultiple("a", 12)).toBe("provide numbers only");

    expect(getLeastCommonMultiple(23, "b")).toBe("provide numbers only");

    expect(getLeastCommonMultiple(0, 0)).toBe("undefined");
  });

  it("should return correct result", () => {
    expect(getLeastCommonMultiple(12, 18)).toBe(36);

    expect(getLeastCommonMultiple(13, 18)).toBe(234);
  });
});

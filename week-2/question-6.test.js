/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for convertSecondsToTime function

 * Question: Convert total seconds into hours, minutes, and seconds

 * Description: Convert a given number of seconds into hours, minutes, and seconds format.
    Example:
    Input:  3665
    Output: 1 hr, 1 min, 5 sec

 */

import { describe, expect, it } from "vitest";
import { convertSecondsToTime } from "./question-6.js";

describe("Convert seconds to time format", () => {
  it("should return (Not a number) if value is not a number", () => {
    expect(convertSecondsToTime("d2d")).toBe("Not a number");
  });

  it("should return invalid data if seconds is negative", () => {
    expect(convertSecondsToTime(-10)).toStrictEqual("invalid data");
  });

  it("should return correct time format", () => {
    expect(convertSecondsToTime(3665)).toStrictEqual(
      `${1} hr, ${1} min, ${5} sec`
    );
  });

  it("should return correct time format", () => {
    expect(convertSecondsToTime(0)).toStrictEqual(
      `${0} hr, ${0} min, ${0} sec`
    );
  });

  it("should return correct time format", () => {
    expect(convertSecondsToTime(59)).toStrictEqual(
      `${0} hr, ${0} min, ${59} sec`
    );
  });

  it("should return correct time format", () => {
    expect(convertSecondsToTime(3601)).toStrictEqual(
      `${1} hr, ${0} min, ${1} sec`
    );
  });
});

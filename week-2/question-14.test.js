/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for getCharacterType function

 * Question: Check character type

 * Description: Input a character and determine if it’s a vowel, consonant, digit, or special symbol.
    Example:
    Input:  a
    Output: Vowel

 */

import { describe, expect, it } from "vitest";
import { getCharacterType } from "./question-14.js";

describe("Check character type", () => {
  it("should return (provide one character)", () => {
    expect(getCharacterType("ab")).toBe("provide one character");
  });

  it("should return (provide one character)", () => {
    expect(getCharacterType(-1)).toBe("provide one character");
  });

  it("should return (provide one character)", () => {
    expect(getCharacterType(12)).toBe("provide one character");
  });

  it("should return (provide one character)", () => {
    expect(getCharacterType({ name: "mahdi" })).toBe("provide one character");
  });

  it("should return Vowel", () => {
    expect(getCharacterType("a")).toBe("Vowel");
  });

  it("should return Vowel", () => {
    expect(getCharacterType("E")).toBe("Vowel");
  });

  it("should return Consonant", () => {
    expect(getCharacterType("m")).toBe("Consonant");
  });

  it("should return Digit", () => {
    expect(getCharacterType("1")).toBe("Digit");
  });

  it("should return Digit", () => {
    expect(getCharacterType(0)).toBe("Digit");
  });

  it("should return Special Symbol", () => {
    expect(getCharacterType("&")).toBe("Special symbol");
  });
});

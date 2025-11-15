/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for getTrafficAction function

 * Question: Traffic Light System using switch-case

 * Description: Input a color (Red, Yellow, Green) and display an action (Stop, Ready, Go).
    Example:
    Input:  Green
    Output: Go

 */

import { describe, expect, it } from "vitest";
import { getTrafficAction } from "./question-12.js";

describe("Traffic Light System", () => {
  it("should return Invalid color", () => {
    expect(getTrafficAction("blue")).toBe("Invalid color");
  });

  it("should return traffic action", () => {
    expect(getTrafficAction("green")).toBe("Go");
  });

  it("should return traffic action", () => {
    expect(getTrafficAction("Yellow")).toBe("Ready");
  });

  it("should return traffic action", () => {
    expect(getTrafficAction("rED")).toBe("Stop");
  });

  it("should return traffic action", () => {
    expect(getTrafficAction("RED")).toBe("Stop");
  });
});

/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-10

 * Test: Write test for function triangleAreaAndPerimeter

 * Question: Calculate the area and perimeter of a rectangle

 * Description: Given length and width, calculate and display both area and perimeter.
    Example:
    Input:  length = 4, width = 6
    Output: Area: 24, Perimeter: 20

 */

import { describe, expect, it } from "vitest";
import { triangleAreaAndPerimeter } from "./question-3.js";

describe("triangleAreaAndPerimeter method", () => {
  it("should return (provide number only) if value is not a number", () => {
    expect(triangleAreaAndPerimeter("ld", 2)).toBe("provide number only");
  });

  it("should return (provide number only) if value is not a number", () => {
    expect(triangleAreaAndPerimeter(2, "ld")).toBe("provide number only");
  });

  it("should return (Invalid widht/height) if height or width are less than or equal to zero", () => {
    expect(triangleAreaAndPerimeter(0, 4)).toBe("Invalid widht/height");
  });

  it("should return (Invalid widht/height) if height or width are less than or equal to zero", () => {
    expect(triangleAreaAndPerimeter(4, 0)).toBe("Invalid widht/height");
  });

  it("should return area and perimeter of a triangle", () => {
    expect(triangleAreaAndPerimeter(6, 4)).toBe(
      `Area: ${24}, Perimeter: ${20}`
    );
  });
});

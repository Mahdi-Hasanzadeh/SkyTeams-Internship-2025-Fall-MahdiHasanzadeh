/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Test: Write test for FahrenheitToCelsius & CelsiusToFahrenheit functions

 * Question: Temperature converter (Celsius ↔ Fahrenheit)

 * Description: Convert temperature from Celsius to Fahrenheit and vice versa.
    Formula:
    F = (C × 9/5) + 32
    C = (F - 32) × 5/9
    Example:
    Input: C = 25
    Output:F = 77

 */

import { describe, expect, it } from "vitest";
import {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  fahrenheitToCelsiusPrecision,
  celsiusToFahrenheitPrecision,
} from "./question-4.js";

describe("Fahrenheit To Celsius and vice versa", () => {
  it("should return the temprature in celsius", () => {
    expect(fahrenheitToCelsius(77)).toBe(`C = ${25}`);
  });

  it("should return the temprature in celcius", () => {
    expect(fahrenheitToCelsius(0)).toStrictEqual(`C = ${-17.77777777777778}`);
  });

  it("should return the temprature in fahrenheit", () => {
    expect(celsiusToFahrenheit(25)).toBe(`F = ${77}`);
  });

  it("should return the temprature in fahrenheit", () => {
    expect(celsiusToFahrenheit(0)).toBe(`F = ${32}`);
  });

  it("should return the temprature in fahrenheith with precision", () => {
    expect(fahrenheitToCelsiusPrecision(0)).toBe(-17.78);
  });

  it("should return the temprature in celsius with precision", () => {
    expect(celsiusToFahrenheitPrecision(0)).toBe(32);
  });

  it("should return the temprature in celsius with precision", () => {
    expect(celsiusToFahrenheitPrecision(-39)).toBe(-38.2);
  });
});

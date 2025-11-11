/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Temperature converter (Celsius ↔ Fahrenheit)

 * Description: Convert temperature from Celsius to Fahrenheit and vice versa.
    Formula:
    F = (C × 9/5) + 32
    C = (F - 32) × 5/9
    Example:
    Input: C = 25
    Output:F = 77

 */

import { round } from "./utility.js";

export function fahrenheitToCelsius(Fahrenheit) {
  let celsius = (Fahrenheit - 32) * (5 / 9);

  return `C = ${celsius}`;
}

export function celsiusToFahrenheit(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;

  return `F = ${fahrenheit}`;
}

export function fahrenheitToCelsiusPrecision(Fahrenheit) {
  let celsius = (Fahrenheit - 32) * (5 / 9);

  return round(celsius);
}

export function celsiusToFahrenheitPrecision(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;

  return round(fahrenheit);
}

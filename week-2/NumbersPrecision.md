# Numbers & Precision in JavaScript

A complete guide to how numbers work in JavaScript, why decimal issues occur, and the best practices for rounding, formatting, and performing accurate calculations.

## 1. JavaScript Number Basics

JavaScript uses a single numeric type:
64-bit IEEE floating-point (same as most programming languages).

Examples:

5
3.14
-8

Advantages:

Simple and universal

Fast

Limitation:

Some decimals cannot be represented with perfect accuracy

## 2. Why JavaScript Has Decimal Problems

JavaScript stores numbers in binary floating-point.
Some decimal numbers become infinite binary fractions.

Example:

0.1 + 0.2; // 0.30000000000000004

This happens in all languages using IEEE floating-point (C, Java, Python, etc.), not just JavaScript.

To avoid these inaccuracies, calculations must often be rounded.

## 3. Math.round() — For Calculations

Math.round() returns a number, making it suitable for formulas and arithmetic.

Basic rounding:

Math.round(4.6); // 5
Math.round(4.4); // 4

Round to specific decimal places:

function round(num, decimals = 2) {
const factor = 10 \*_ decimals;
return Math.round(num _ factor) / factor;
}

Why use Math.round()?

Works correctly for real calculations

Reduces floating-point errors

Keeps the value as a number

## 4. toFixed() — For Display

number.toFixed(n) returns a string with n decimal places:

(3.14159).toFixed(2); // "3.14"

Use .toFixed() for:

UI display

Formatting money

Reports

Showing temperatures

Printed/visible output

Trailing zeros are added automatically:

(5).toFixed(2); // "5.00"

## 5. Math.round vs toFixed

Feature Math.round toFixed
Returns number string
Best for calculations UI/display
Controls decimals yes yes
Adds trailing zeros no yes
Safe in formulas yes no

## 6. Recommended Best Practices

Use Math.round() for all calculations

Use toFixed() only for formatting output

Never perform math on the result of .toFixed()

## 7. Techniques to Improve Precision

1. Multiply → Round → Divide (most common)
   Math.round(0.1 \* 100) / 100;

1. Store values as integers (financial apps)

Example: 12.50 → store as 1250 (cents).

3. Use decimal libraries (high precision)

Popular libraries:

decimal.js

big.js

math.js

Example:

new Decimal(0.1).plus(0.2).toString(); // "0.3"

## 8. Summary

JavaScript uses floating-point numbers; decimal errors are normal.

Math.round() is for calculations and keeps numeric output.

toFixed() is for formatting and returns a string.

Never use toFixed() inside formulas.

For finance, store values as integers.

For critical precision, use a decimal library.

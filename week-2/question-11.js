/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Simple Calculator using switch-case

 * Description: Input two numbers and an operator (+, -, *, /) and compute the result.
    Example:
    Input:  5, 3, +
    Output: 8

 */

import { isNumber, round } from "./utility.js";

export function calculator(number1, number2, operator) {
  if (!isNumber(number1) || !isNumber(number2)) return "provide number only";

  switch (operator) {
    case "+": {
      return number1 + number2;
    }

    case "-": {
      return number1 - number2;
    }

    case "*": {
      return number1 * number2;
    }

    case "/": {
      if (number2 == 0) return "can not divide by 0";
      let result = number1 / number2;
      return round(result);
    }

    default: {
      return "Invalid operator";
    }
  }
}

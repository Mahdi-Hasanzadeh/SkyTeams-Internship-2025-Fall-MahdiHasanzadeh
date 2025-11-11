// round the number and divide by FACTOR that is good for Math Calculation in Javascript
export function round(number, decimals = 2) {
  const FACTOR = 10 ** decimals;
  return Math.round(number * FACTOR) / FACTOR;
}

// return true if value is a number otherwise false
export function isNumber(value) {
  return typeof value == "number";
}

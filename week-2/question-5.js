/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Compute Simple and Compound Interest
 
 * Description: Given Principal (P), Rate (R), and Time (T), compute:
    Simple Interest = (P × R × T) / 100
    Compound Interest = P × ((1 + R/100) ^ T - 1)
    Example:
    Input:  P = 1000, R = 5, T = 2
    Output: SI = 100, CI ≈ 102.5

 */

import { isNumber, round } from "./utility.js";

// take the principal,rate and time and return the result as an array => [simpleInterest,compoundInterest]
export function calculateSimpleAndCompoundInterest(principal, rate, time) {
  if (!isNumber(principal) || !isNumber(rate) || !isNumber(time))
    return "provide number only";

  let simpleInterest = (principal * rate * time) / 100;

  simpleInterest = round(simpleInterest);

  let compoundInterest = principal * ((1 + rate / 100) ** 2 - 1);

  compoundInterest = round(compoundInterest);

  return [simpleInterest, compoundInterest];
}

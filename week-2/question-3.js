/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-10

 * Question: Calculate the area and perimeter of a rectangle
    
*  Description: Given length and width, calculate and display both area and perimeter.
    Example:
    Input:  length = 4, width = 6
    Output: Area: 24, Perimeter: 20

 */

import { isNumber } from "./utility.js";

// take width and height and return area and perimeter as an array => [area,perimeter]
export function triangleAreaAndPerimeter(width, height) {
  if (!isNumber(width) || !isNumber(height)) return "provide number only";

  if (width <= 0 || height <= 0) {
    return "Invalid widht/height";
  }

  let area = width * height;
  let perimeter = width * 2 + height * 2;

  return [area, perimeter];
}

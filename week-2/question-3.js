/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-10

 * Question: Calculate the area and perimeter of a rectangle
    
*  Description: Given length and width, calculate and display both area and perimeter.
    Example:
    Input:  length = 4, width = 6
    Output: Area: 24, Perimeter: 20

 */

export function triangleAreaAndPerimeter(width, height) {
  if (width <= 0 || height <= 0) {
    return "Invalid widht/height";
  }

  let area = width * height;
  let perimeter = width * 2 + height * 2;

  return `Area: ${area}, Perimeter: ${perimeter}`;
}

console.log(triangleAreaAndPerimeter(6, 4));

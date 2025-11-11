/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Convert total seconds into hours, minutes, and seconds

 * Description: Convert a given number of seconds into hours, minutes, and seconds format.
    Example:
    Input:  3665
    Output: 1 hr, 1 min, 5 sec

 */

import { isNumber } from "./utility.js";

// take seconds and return the hour,minutes and seconds
export function convertSecondsToTime(seconds) {
  if (!isNumber(seconds)) return "Not a number";

  if (seconds < 0) {
    return "invalid data";
  }

  let hour = parseInt(seconds / 3600);

  let remaining = seconds % 3600;

  let minute = parseInt(remaining / 60);

  let sec = remaining % 60;

  return `${hour} hr, ${minute} min, ${sec} sec`;
}

console.log(convertSecondsToTime(3600));

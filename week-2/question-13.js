/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Month name & number of days using switch-case

 * Description: Input a month number (1–12) and display its name and number of days.
    Example:
    Input:  2
    Output: February, 28 or 29 days

 */

import { isNumber } from "./utility.js";

export function monthNameAndDays(monthNumber) {
  if (!isNumber(monthNumber)) return "provide number only";

  if (monthNumber <= 0 || monthNumber > 12) return "month must be between 1-12";

  const MONTH_INFO = {
    1: { name: "January", days: 31 },
    2: { name: "February", days: "28 or 29" },
    3: { name: "March", days: 31 },
    4: { name: "April", days: 30 },
    5: { name: "May", days: 31 },
    6: { name: "June", days: 30 },
    7: { name: "July", days: 31 },
    8: { name: "August", days: 31 },
    9: { name: "September", days: 30 },
    10: { name: "October", days: 31 },
    11: { name: "November", days: 30 },
    12: { name: "December", days: 31 },
  };

  let monthName = MONTH_INFO[monthNumber].name;
  let days = MONTH_INFO[monthNumber].days;

  return `${monthName}, ${days} days`;
}

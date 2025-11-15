/**
 * Author: Mahdi Hasanzadeh

 * Date: 2025-11-11

 * Question: Traffic Light System using switch-case

 * Description: Input a color (Red, Yellow, Green) and display an action (Stop, Ready, Go).
    Example:
    Input:  Green
    Output: Go

 */

export function getTrafficAction(color) {
  switch (color.toLowerCase()) {
    case "red": {
      return "Stop";
    }

    case "yellow": {
      return "Ready";
    }

    case "green": {
      return "Go";
    }

    default: {
      return "Invalid color";
    }
  }
}

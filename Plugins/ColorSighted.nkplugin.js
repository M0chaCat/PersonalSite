"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ColorSighted {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!ColorSighted",
    id: "cat.kitties.arcane.ColorSighted",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "lewisakura",
      id: "96269247411400704n"
    }
  ],
    description: "Removes the colorblind-friendly icons from statuses, just like 2015-2017 Discord",
    version: "1.0.0",
    patches: [
      {
        find: "Masks.STATUS_ONLINE",
        replacement: {
          match: /Masks\.STATUS_(?:IDLE|DND|STREAMING|OFFLINE)/g,
          replace: "Masks.STATUS_ONLINE"
        }
      },
      {
        find: ".AVATAR_STATUS_MOBILE_16;",
        replacement: {
          match: /(fromIsMobile:\i=!0,.+?)status:(\i)/,
          // Rename field to force it to always use "online"
          replace: '$1status_$:$2="online"'
        }
      }
    ],
    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = ColorSighted;/*NKSIG_W3sicyI6IkFTWmloM0ZHUE1MMWd0VDlaT1RlU1Q1NTBxTnVyV1I3SDlMWGZPcnRqR0RtVzhkUjU2R3RwZ3hiNVQrd0xpenRlQnpOOU81Z1V6RDVkcURnVWxlWGhNZ1dBSHV6azRXUHd5M2wvOEtJZ013R1NLYzdWbTFJTTNwMlV0NWZDc3ZYT0RpVTRpODZHL2FPaUJ2c0tjcHNsc2tnYS9EL1g5QkwreVlnVXNQWnZlczMwWmE1In0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
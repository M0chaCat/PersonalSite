"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoTypingAnimation {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!NoTypingAnimation",
    id: "cat.kitties.arcane.NoTypingAnimation",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "AutumnVN",
      id: "393694671383166998n"
    }
  ],
    description: "Disables the CPU-intensive typing dots animation",
    version: "1.0.0",
    patches: [{
      find: "dotCycle",
      replacement: {
        match: /document.hasFocus\(\)/,
        replace: "false"
      }
    }],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = NoTypingAnimation;/*NKSIG_W3sicyI6IkFXUlVoSWFmL2xOYTdvVzdqTTB4K0RKK1lQREFIb09sZS9iZTNGcGl0YjNXMXE1LzkvRmZzNjhyb3c2eGZCR1Z3b3hkNk5FbjFIQUFzbzZRblZvT0tGaDlBSXdNMHlaZHoxQW5mTFF3SFkxMGJrUFUyekNXei93K3oycTV2SWllODlVeVFyUVFoU0tQNlI2QlhtTlRzbUs2cVlrMVlUQiswRlhvdEQzQkp0YzVhWGdFIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
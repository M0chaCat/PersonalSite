"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class renormalizemessagelinks {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!NormalizeMessageLinks",
    id: "cat.kitties.arcane.normalizemessagelinks",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "bb010g",
      id: "72791153467990016n"
    }
  ],
    description: "Strip canary/ptb from message links",
    version: "1.0.0",
    patches: [
      {
        find: "Xrt5Pj",
        replacement: {
          match: /\.concat\(location\.host\)/,
          replace: ".concat($self.normalizeHost(location.host))",
        },
      },
    ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = renormalizemessagelinks;/*NKSIG_W3sicyI6IkFTbjlleERhaE9jTmxpaVR0azVTM2RpaFcxVzVNdlNkVHU4TUlWL1M0d1MvbDJFVWhubnNWZE90U0VlMG45Q245QU1UQVVReDUwMkIreG1ieVBrejBhNUtBSEswZHZSTmRUemo2RTVVeHdOZXJZSGV1UXdiR2NRblNuYnBseU5zaWpYUkVwYzY4dkhmRFpKaGltaXUwSThNY3lNRllpT2NtTCtsbm1qc0lyTUlDQ3pLIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
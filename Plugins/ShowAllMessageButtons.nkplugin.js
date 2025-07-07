"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ShowAllMessageButtons {
  info = {
    name: "Re!ShowAllMessageButtons",
    id: "cat.kitties.arcane.ShowAllMessageButtons",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Nuckyz",
      id: "235834946571337729n"
    }],
    description: "Always show all message buttons no matter if you are holding the shift key or not.",
    version: "1.0.0",
    patches: [
      {
          find: "Lv7LxM",
          replacement: {
              match: /isExpanded:\i&&(.+?),/,
              replace: "isExpanded:$1,"
          }
      }
  ]
  };

  constructor() {}
}

exports.default = ShowAllMessageButtons;/*NKSIG_W3sicyI6IkFUZjFYYnJ5eHlVbzg5NzVzQ1VKREI4UkZnT1Via3VqV01UYkhtOURBVllRQk91NzJoc3p2L3pDT1pUeFpxMHo0QWZic0x1MnZiSzB4cWlrQUJiK2Y2WGZBS0pSUDV2elM5YjBWL0VqcDlxZmFUcnh4YzJFSXZ6cmZ1OGUzajdhT2g1ZG9seUpFYzVnLy9ERlhubE1wVmdqYVFHd0V6eGxVa1hKWVRXZzZ5Nnpia3RQIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
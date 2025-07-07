"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoUnblockToJump {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!NoUnblockToJump",
    id: "cat.kitties.arcane.NoUnblockToJump",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "dzshn",
      id: "310449948011528192n"
    }
  ],
    description: "Allows you to jump to messages of blocked users without unblocking them",
    version: "1.0.0", 
    patches: [
      {
        find: '.id,"Search Results"',
        replacement: {
          match: /if\(.{1,10}\)(.{1,10}\.show\({.{1,50}\i\.intl\.string\(\i\.t\["j7eA\/v"\]\))/, //intl::UNBLOCK_TO_JUMP_TITLE
          replace: "if(false)$1"
        }
      },
      {
        find: "renderJumpButton()",
        replacement: {
          match: /if\(.{1,10}\)(.{1,10}\.show\({.{1,50}\i\.intl\.string\(\i\.t\["j7eA\/v"\]\))/, //intl::UNBLOCK_TO_JUMP_TITLE
          replace: "if(false)$1"
        }
      },
      {
        find: "flash:!0,returnMessageId",
        replacement: {
          match: /.\?(.{1,10}\.show\({.{1,50}\i\.intl\.string\(\i\.t\["j7eA\/v"\]\))/, //intl::UNBLOCK_TO_JUMP_TITLE
          replace: "false?$1"
        }
      }
    ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = NoUnblockToJump;/*NKSIG_W3sicyI6IkFiV3JpRTQ1amZnQTM4UjFuK2hIOVM2cnlpWk42blJoanBYUlBEQTlrZ0FXeTRGWEllQitCTWFXQWRpNGhSOE45T0xncTlDT2Q0QVFra0ZTc0VrY2tIMW1BQXdSMEJaeGFtc013aG1rVkMzYnIxMC9adUNPT1o1eWVDRWJmQjl0a0VlaXY5WDNUUE1mLzQvbjZYY1hUeG12bkJ6VU5JcFlobVR6Tno5MG1GUHpGY0N4In0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
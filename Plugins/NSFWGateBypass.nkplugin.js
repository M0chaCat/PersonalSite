"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NSFWGateBypass {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!NSFWGateBypass",
    id: "cat.kitties.arcane.NSFWGateBypass",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Commandtechno",
      id: "296776625432035328n"
    }
  ],
    description: "Allows you to access NSFW channels without setting/verifying your age",
    version: "1.0.0",
    patches: [
      {
        find: ".nsfwAllowed=null",
        replacement: {
          match: /(?<=\.nsfwAllowed=)null!==.+?(?=[,;])/,
          replace: "!0",
        },
      },
    ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = NSFWGateBypass;/*NKSIG_W3sicyI6IkFjV3pRYUNEMDNENmpDa1Y0dDNtbkNYdkRwTlpoUERpbGVpT1BlOTNDVFl4YzROb3VURnFxMUNwMkJQc3JpaG51OUFJSlFaK2J6dkRXOXNLUHRveGlpNERBQTFjL2c3U0pwcENQb09wNGxHczhSREoxeTFXL1piMEFXVzVoNmhuVmhrTCt4cGJ4b1I3L3dxS1VPUllLRGNpYzVycXJjTncrQ0lzYWNBRlJpNG1DM3lkIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
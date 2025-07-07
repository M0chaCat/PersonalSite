"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class UnlimitedAccounts {
  constructor() {
    this.intervalId = null;
  }

  info = {
    name: "UnlimitedAccounts",
    description: "Increases the amount of accounts you can add.",
    id: "cat.kitties.arcane.UnlimitedAccounts",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    version: "1.0.0",
    patches: [
      {
        find: "multiaccount_cta_tooltip_seen",
        replacement: {
          match: /(let \i=)\d+(,\i="switch-accounts-modal",\i="multiaccount_cta_tooltip_seen")/,
          replace: "$1Infinity$2",
        },
      },
    ],
  };
}

exports.default = UnlimitedAccounts;/*NKSIG_W3sicyI6IkFXMExTWVV1ajZ5bEtQQlFreVFVekRZVTNOUnNSK1hBUHhQa1NIcTU3RGV4aG0xdDZlbWhXMzNvNDB2WDFYa2JCOXh6dlJrZ3M0NWxUd2FYQ3o4T3BKL1BBRmtONEdjcWpPdFZ0QXgwU3g3TDJ0bU9NbXBGZVQ0dUxzVmUxSFZHRDMwTDRxNll1NThkMjVldGdLaVY0bUdvVVJhN2pIMHd6QWRjMkRWL01mbnpvL2l4In0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
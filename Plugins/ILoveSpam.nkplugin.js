"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class iLoveSpam {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!iLoveSpam",
    id: "cat.kitties.arcane.iLoveSpam",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "botato",
      id: "440990343899643943n"
    }
  ],
    description: "Do not hide messages from 'likely spammers'",
    version: "1.0.0",
    patches: [
      {
        find: "hasFlag:{writable",
        replacement: {
          match: /if\((\i)<=(?:1<<30|1073741824)\)return/,
          replace: "if($1===(1<<20))return false;$&",
        },
      },
    ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = iLoveSpam;/*NKSIG_W3sicyI6IkFjdDVYYkdZVmhrRGRiNDdqUzljNGpqbWVtellYMWk3Mk5jS1dnUWF1ZWx3Ylc5MjZJRkhHSWFTcWNKazdOTDlGM3drdjNPc1Y0RmljaERHVmIwdGdadGFBUWdRUG1GeWMydnF2N2l5MmczWlA3NExpRDlQZHRObXRuQURGNTRPVXp5NG1NWDFXem1USm1qQVhKWFdUOEVhN0JLa1JlakpSbzdxU1RPdDFYbXVEd1MwIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
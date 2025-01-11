"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class SecretRingToneEnabler {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }

    info = {
      name: "Re!SecretRingToneEnabler",
      id: "cat.kitties.arcane.SecretRingToneEnabler",
      authors: [{
        name: "Mocha",
        id: "808802000224518264"
      },
      {
        name: "FieryFlames",
        id: "890228870559698955n"
      },
      {
        name: "AndrewDLO",
        id: "434135504792059917n"
      },
      {
        name: "RamziAH",
        id: "1279957227612147747n"
      }
    ],
      description: "Always play the secret version of the discord ringtone (except during special ringtone events)",
      version: "1.0.0",
      patches: [
        {
          find: '"call_ringing_beat"',
          replacement: {
            match: /500!==\i\(\)\.random\(1,1e3\)/,
            replace: "false",
          }
        },
      ],
      preferences: []
  }

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }
  //other code here!
}

exports.default = SecretRingToneEnabler;/*NKSIG_W3sicyI6IkFOUlVFMXFkeUhLVkZTQzRHVUdLOVhnY3NQWFdtelcxTEhubHUvaUNqWTlnTXNiZDNUZEp6cURXVzBBMGs1NTdhU2dHT0JHaExVWkdaeS9nSWRvUnpTcVFBWStPM2xKOG1TNHI1T1FoZEljK1ZlTUIxbHZVQnNldlZTQnNxUnJ6QVEzOWx2cTdWMXU1am8wVWNCUHpIblc3SjZJOURBL0h5WmM3allYVXZtRm5ZUWJyIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
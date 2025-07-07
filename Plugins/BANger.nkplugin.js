"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BANger {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!BANger",
    id: "cat.kitties.arcane.BANger",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Xinto",
      id: "423915768191647755n"
    },
    {
      name: "Glitchy",
      id: "269567451199569920n"
    }
  ],
    description: "Replaces the GIF in the ban dialogue with a custom one.",
    version: "1.0.0",
    patches: [
      {
        find: "BAN_CONFIRM_TITLE.",
        replacement: {
          match: /src:\i\("?\d+"?\)/g,
          replace: () => `src: "${this.userPreferences.source}"`
        }
      }
    ],
    preferences: [
      {
        name: "Source URL",
        description: "Source to replace ban GIF with (Video or Gif)",
        id: "source",
        type: "string",
        default: "https://i.imgur.com/wp5q52C.mp4",
      },
    ],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = BANger;/*NKSIG_W3sicyI6IkFMYzRRUVZTREx4eS9ScExUVFdISVhKNG9lTDJ3dGVtdWo1Q3YraTBGazd1Ym1DYUdwRXBPODVnNjVwS3pBWXJyS05hRWxnSHNCQVB2OXdjclFMb1dJSlJBV3U5bGt1WGFiUDlYZGloRG9zd1BhZklTQmd4UHVsVVZCK2hLUnp2aVpxSmlPK1I2R0o4djk1QkhYaVNSTzFMa2I4alNFYzU4NFQwMWYwYnJKdmtqNGNkIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class refiximagesquality {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!FixImagesQuality",
    id: "cat.kitties.arcane.refiximagesquality",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Nuckyz",
      id: "235834946571337729n"
    }
  ],
    description: "Prevents images from being loaded as webp, which can cause quality loss",
    version: "1.0.0",
    patches: [
      {
          find: "getFormatQuality(){",
          replacement: {
              match: /(?<=null;return )\i\.\i&&\(\i\|\|!\i\.isAnimated.+?:(?=\i&&\(\i="png"\))/,
              replace: ""
          }
      }
  ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = refiximagesquality;
/*NKSIG_W3sicyI6IkFMTFZhY0JYSWEvUmFBYXZaVUd2Rm1vQjRnNmN6dnJONldzZHMrdHp3L0VCay90ZEw1VXBCSi9KWWdzQjBTT2k4eEhOUUlVVS9wa2JuU0dNOTlSWDhhUktBVFNmODBJSE1ybENLRlVGSWxlaFk0Q1ZxQjJDYVliK0FydmdUSjhiOVIzaEl1QnZwcEthR2lqY2U4UUs3eGEvZVpjSUx3Zm45N1ZFSTRGWDM4NzAzUTVhIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
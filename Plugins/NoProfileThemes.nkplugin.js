"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoProfileThemes {
  info = {
    name: "Re!NoProfileThemes",
    id: "cat.kitties.arcane.NoProfileThemes",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "TheKodeToad",
      id: "706152404072267788n"
    }
  ],
    description: "Completely removes Nitro profile themes",
    version: "1.0.0",
    patches: [
      {
        find: ".NITRO_BANNER,",
        replacement: {
          match: /=(?=\i\.\i\.isPremiumAtLeast\(null==(\i))/,
          replace: "=(arguments[0]?.bannerSrc||$1?.banner)&&"
        }
      },
      {
        find: ".avatarPositionPremiumNoBanner,default:",
        replacement: {
          match: /\.avatarPositionPremiumNoBanner(?=,default:\i\.(\i))/,
          replace: ".$1"
        }
      },
      {
        find: "hasThemeColors(){",
        replacement: {
          match: /get canUsePremiumProfileCustomization\(\){return /,
          replace: "$&false &&"
        }
      }
    ]
  };

  constructor() {}

}

exports.default = NoProfileThemes;/*NKSIG_W3sicyI6IkFiRjBpSk9uMXArdDNvVVNPWndHVmxDUUlQbFZYM0FrRGJ5dEdGSEpKNE4vdmVRVW1xcFlxd2xaN1kwV2s2ZGppUUNLUG1kbDlGeFJMY1JOUnJMOENsNGRBYXQrNHBjODZWbmwrV2dBc0dsaThFL1JSRXJhTkFKMjdPaXJqSzNWOGkvWFgzdjc2NERkRTBZUGZ4RDZHelg1V05DNlFHajR1M0VqN0UzdVI3eGtNNHYxIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
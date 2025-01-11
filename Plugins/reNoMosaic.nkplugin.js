"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class renomosaic {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!NoMosaic",
    id: "cat.kitties.arcane.renomosaic",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "AutumnVN",
      id: "440990343899643943n"
    }
  ],
    description: "Removes Discord image mosaic",
    version: "1.0.0",
    patches: [
      {
          find: '=>"IMAGE"===',
          replacement: {
              match: /=>"IMAGE"===\i\|\|"VIDEO"===\i(?:\|\|("VISUAL_PLACEHOLDER"===\i))?;/,
              replace: (_, visualPlaceholderPred) => visualPlaceholderPred != null ? `=>${visualPlaceholderPred};` : "=>false;"
          }
      },
      {
          find: "renderAttachments(",
          predicate: () => this.userPreferences.inlineVideo,
          replacement: {
              match: /url:(\i)\.url\}\);return /,
              replace: "$&$1.content_type?.startsWith('image/')&&"
          }
      },
  ],

    preferences: [
      {
        name: "inlineVideo",
        description: "Play videos without carousel modal",
        type: "boolean",
        default: true,
        restartNeeded: true
      }
    ],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = renomosaic;/*NKSIG_W3sicyI6IkFHcmh2cTRKZDRzcTdtdGVnUGNpWkdveExhTzNOKzFqdVoxcGYva28zV0szMmdENlVaV0phaGw1elUrcjlySzgzUitIYzFwWUlvK1JFeUQ4a3VDNmZ4eFhBTk0vUTUycUZKYXpZZGdYQTlkSTd2c0ZhTmw3YkFydFljWUZoOTArUFlETElocDMyQk1HaXBJSGs3ZnVzeWY1Zzl2REpMeWNjaE94NFR6dkdWSEUwSlIwIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
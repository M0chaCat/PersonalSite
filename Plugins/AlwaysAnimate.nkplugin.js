"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AlwaysAnimate {
  info = {
    name: "Re!AlwaysAnimate",
    id: "cat.kitties.arcane.AlwaysAnimate",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Fiery",
      id: "890228870559698955n"
    }
  ],
    description: "Animates anything that can be animated",
    version: "1.0.0",
    patches: [
      {
        find: "canAnimate:",
        all: true,
        // Some modules match the find but the replacement is returned untouched
        noWarn: true,
        replacement: {
          match: /canAnimate:.+?([,}].*?\))/g,
          replace: (m, rest) => {
            const destructuringMatch = rest.match(/}=.+/);
            if (destructuringMatch == null) return `canAnimate:!0${rest}`;
            return m;
          }
        }
      },
      {
        // Status emojis
        find: ".pclUFB", //intl::GUILD_OWNER
        replacement: {
          match: /(?<=\.activityEmoji,.+?animate:)\i/,
          replace: "!0"
        }
      },
      {
        // Guild Banner
        find: ".animatedBannerHoverLayer,onMouseEnter:",
        replacement: {
          match: /(?<=guildBanner:\i,animate:)\i(?=}\))/,
          replace: "!0"
        }
      }
    ],
  };

    
}

exports.default = AlwaysAnimate;
/*NKSIG_W3sicyI6IkFQbVhLZU1uOXRTZWxkdlRvTGhWd0tSUnNsSVJPRFoxNS9vNEpiOFlnZ05jMlhGWlA4eTZDbWxrTU1zNE43S25rZmV0amorbnRiNnRudmZPd3VjblhWNWhBQzl1ZVpHb0F3Wk90dmIrUzZOTStaODlwQTNscnRzbHZ5UnVIM3Fwenhrb2ZMN2JCYUg4b2RDMmhkME1LbmMxUWU3MlpEb0QvRklxK1ZYTnNXaDdraVZEIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
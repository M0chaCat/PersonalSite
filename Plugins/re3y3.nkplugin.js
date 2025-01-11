"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
class re3y3 {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }

  info = {
    name: "Re!3y3",
    id: "cat.kitties.arcane.re3y3",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Alyxia",
      id: "952185386350829688n"
    },
    {
      name: "Remty",
      id: "335055032204656642n"
    }
  ],
    description: "Allows you to see 3y3 custom profile backgrounds, based on fakeProfileThemes from vencord.",
    version: "1.0.0",
    preferences: [
      {
        name: "nitroFirst",
        description: "Use Nitro colors first if both are present.",
        type: "boolean",
        default: true
      }
    ],
    patches: [
      {
        find: "UserProfileStore",
        replacement: {
          match: /(?<=getUserProfile\(\i\){return )(.+?)(?=})/,
          replace: "$self.colorDecodeHook($1)"
        }
      }
    ]
  };

  virtualMerge(target, source) {
    return { ...target, ...source };
  }

  colorDecodeHook(user) {
    if (user) {
        if (this.userPreferences.nitroFirst === true && user.themeColors) return user;
        const colors = this.decode(user.bio);
        if (colors) {
            return this.virtualMerge(user, {
                premiumType: 2,
                themeColors: colors
            });
        }
    }
    return user;
  }
  // Courtesy of Cynthia.
  decode(bio) {
    if (bio == null) return null;

    const colorString = bio.match(
        /\u{e005b}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]{1,6})\u{e002c}\u{e0023}([\u{e0061}-\u{e0066}\u{e0041}-\u{e0046}\u{e0030}-\u{e0039}]{1,6})\u{e005d}/u,
    );
    if (colorString != null) {
        const parsed = [...colorString[0]]
            .map(x => String.fromCodePoint(x.codePointAt(0) - 0xe0000))
            .join("");
        const colors = parsed
            .substring(1, parsed.length - 1)
            .split(",")
            .map(x => parseInt(x.replace("#", "0x"), 16));

        return colors;
    }
    return null;
  }
}
exports.default = re3y3;
/*NKSIG_W3sicyI6IkFRSk9zVzJXTE1aZHNTckE3N09XRUdSR1FDeCsxbDBPMjh3cW0vMTNCS05yNU5DdVE4VWNXMy8zMWljRDdKeFVvVHFUWjlqR1JCdkNwZ293cUJEaTBTb2tBZHZWOThVTzBKbDF1TERKWWhkcWdJYjlhUU1Nc1ZHR0tLV2YvSXJzOGFYMy9jWVk2VGNWWlF5RlUxWXpkRVFUa1RlM2o2S3JLY2NvaDBTMTIyQkdWNnZNIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
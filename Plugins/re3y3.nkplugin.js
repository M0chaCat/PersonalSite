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
    }],
    description: "Allows you to see 3y3 custom profile backgrounds.",
    version: "0.1.0",
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

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoProfileThemes {
  info = {
    name: "No Profile Themes",
    id: "cat.kitties.arcane.NoProfileThemes",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Completely removes Nitro profile themes",
    version: "0.1.0",
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

exports.default = NoProfileThemes;
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

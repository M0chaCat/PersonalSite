"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ColorSighted {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Color Sighted",
    id: "cat.kitties.arcane.ColorSighted",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Removes the colorblind-friendly icons from statuses, just like 2015-2017 Discord",
    version: "0.1.0",
    patches: [
      {
        find: "Masks.STATUS_ONLINE",
        replacement: {
          match: /Masks\.STATUS_(?:IDLE|DND|STREAMING|OFFLINE)/g,
          replace: "Masks.STATUS_ONLINE"
        }
      },
      {
        find: ".AVATAR_STATUS_MOBILE_16;",
        replacement: {
          match: /(fromIsMobile:\i=!0,.+?)status:(\i)/,
          // Rename field to force it to always use "online"
          replace: '$1status_$:$2="online"'
        }
      }
    ],
    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = ColorSighted;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NSFWGateBypass {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "NSFW Gate Bypass",
    id: "cat.kitties.arcane.NSFWGateBypass",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Allows you to access NSFW channels without setting/verifying your age",
    version: "0.1.0",
    patches: [
      {
        find: ".nsfwAllowed=null",
        replacement: {
          match: /(?<=\.nsfwAllowed=)null!==.+?(?=[,;])/,
          replace: "!0",
        },
      },
    ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = NSFWGateBypass;
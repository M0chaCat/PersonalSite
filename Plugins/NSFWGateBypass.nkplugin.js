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
    id: "arcane:NSFWGateBypass",
    authors: [{
      name: "Arcane",
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

exports.default = NSFWGateBypass;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425033}*//*SIGNATURE_thvL6wL3mFbV4+zlAcXz7X4IzSP5mijOwQuiVeXcpf1ssJ04HCAs6himCmC9m8xuzP3P2ELMj2d+zT8LGBjNbQ==*/
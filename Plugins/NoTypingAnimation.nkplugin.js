"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoTypingAnimation {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!NoTypingAnimation",
    id: "cat.kitties.arcane.NoTypingAnimation",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "AutumnVN",
      id: "393694671383166998n"
    }
  ],
    description: "Disables the CPU-intensive typing dots animation",
    version: "1.0.0",
    patches: [{
      find: "dotCycle",
      replacement: {
        match: /document.hasFocus\(\)/,
        replace: "false"
      }
    }],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = NoTypingAnimation;
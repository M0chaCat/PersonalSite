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
    name: "No Typing Animation",
    id: "arcane:NoTypingAnimation",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Disables the CPU-intensive typing dots animation",
    version: "0.1.0",
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
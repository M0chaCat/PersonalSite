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

exports.default = NoTypingAnimation;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425116}*//*SIGNATURE_s6/ZRFq5ONxna8LUNZLOf1u+NthyKgqsD+r3DcdFdfKQQIK3roHWQcEYIb2HPPj/ouGCebqi65OFffltCK1Asw==*/
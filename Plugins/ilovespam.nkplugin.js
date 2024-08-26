"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class iLoveSpam {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "i Love Spam",
    id: "arcane:iLoveSpam",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Do not hide messages from 'likely spammers'",
    version: "0.1.0",
    patches: [
      {
        find: "hasFlag:{writable",
        replacement: {
          match: /if\((\i)<=(?:1<<30|1073741824)\)return/,
          replace: "if($1===(1<<20))return false;$&",
        },
      },
    ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = iLoveSpam;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425574}*//*SIGNATURE_Yi8qKAHsG2KF+9jSHcxwNwgV0aglQFEto/s2X//c3Y1ABAn2QbrOphqXGn88ZmVKwppVnqqtDMCYEVgzFT41cg==*/
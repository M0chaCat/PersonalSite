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
    name: "Re!iLoveSpam",
    id: "cat.kitties.arcane.iLoveSpam",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "botato",
      id: "440990343899643943n"
    }
  ],
    description: "Do not hide messages from 'likely spammers'",
    version: "1.0.0",
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

exports.default = iLoveSpam;
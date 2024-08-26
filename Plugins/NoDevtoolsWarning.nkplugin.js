"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoDevtoolsWarning {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "No DevtoolsWarning",
    id: "arcane:NoDevtoolsWarning",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Disables the 'HOLD UP' banner in the console. As a side effect, also prevents Discord from hiding your token, which prevents random logouts.",
    version: "0.1.0",
    patches: [{
      find: "setDevtoolsCallbacks",
      replacement: {
        match: /if\(null!=\i&&"0.0.0"===\i\.remoteApp\.getVersion\(\)\)/,
        replace: "if(true)"
      }
    }],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = NoDevtoolsWarning;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425073}*//*SIGNATURE_COueTIbcsCEmSrBq71X2zMy19czRGIqBxUo/45utw3iWV5ecXyBWqccT3l7pUW3AS1lR1Z/CMac0f2eEkcoIUA==*/
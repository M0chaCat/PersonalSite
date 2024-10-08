"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BANger {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "BANger",
    id: "arcane:BANger",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Replaces the GIF in the ban dialogue with a custom one.",
    version: "0.1.0",
    patches: [
      {
        find: "BAN_CONFIRM_TITLE.",
        replacement: {
          match: /src:\i\("?\d+"?\)/g,
          replace: () => `src: "${this.userPreferences.source}"`
        }
      }
    ],
    preferences: [
      {
        name: "Source URL",
        description: "Source to replace ban GIF with (Video or Gif)",
        id: "source",
        type: "string",
        default: "https://i.imgur.com/wp5q52C.mp4",
      },
    ],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = BANger;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648424867}*//*SIGNATURE_LGWTbYfqIdcC85sKIuHVcn2CEJgEyHbasoN77TLzC9r+ozmXTsBMAhzCnb4ATBIgjxIR4nAz4BEL6ftcQneywg==*/
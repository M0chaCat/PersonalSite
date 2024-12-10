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
    name: "Re!BANger",
    id: "cat.kitties.arcane.BANger",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Xinto",
      id: "423915768191647755n"
    },
    {
      name: "Glitchy",
      id: "269567451199569920n"
    }
  ],
    description: "Replaces the GIF in the ban dialogue with a custom one.",
    version: "1.0.0",
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

exports.default = BANger;
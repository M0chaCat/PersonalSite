"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BetterGifPicker {
  info = {
    name: "Better Gif Picker",
    id: "arcane:BetterGifPicker",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Makes the gif picker open the favorite category by default",
    version: "0.1.0",
    patches: [
      {
        find: ".GIFPickerResultTypes.SEARCH",
        replacement: [{
          match: /(?<="state",{resultType:)null/,
          replace: '"Favorites"'
        }]
      }
    ],
    preferences: []
  };
}

exports.default = BetterGifPicker;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425452}*//*SIGNATURE_f5HQfgnR+hJ8SXVUen0lm4Qp9NVKohy6SFLXALyRV5d4BnsPi4GxYdGjkqJZRy0eu5aA/RIhB/dIJ/u7LrAIng==*/

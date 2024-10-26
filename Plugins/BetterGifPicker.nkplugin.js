"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BetterGifPicker {
  info = {
    name: "Better Gif Picker",
    id: "cat.kitties.arcane.BetterGifPicker",
    authors: [{
      name: "Mocha",
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

exports.default = BetterGifPicker;
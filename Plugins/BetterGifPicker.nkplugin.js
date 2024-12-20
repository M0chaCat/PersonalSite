"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BetterGifPicker {
  info = {
    name: "Re!BetterGifPicker",
    id: "cat.kitties.arcane.BetterGifPicker",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Samwich",
      id: "976176454511509554n"
    }],
    description: "Makes the gif picker open the favorite category by default",
    version: "1.0.0",
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
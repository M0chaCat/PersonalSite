"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ShowAllMessageButtons {
  info = {
    name: "Show All Message Buttons",
    id: "cat.kitties.arcane.ShowAllMessageButtons",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Always show all message buttons no matter if you are holding the shift key or not.",
    version: "0.1.0",
    patches: [
      {
        find: ".Messages.MESSAGE_UTILITIES_A11Y_LABEL",
        replacement: {
          match: /isExpanded:\i&&(.+?),/,
          replace: "isExpanded:$1,"
        }
      }
    ]
  };

  constructor() {}
}

exports.default = ShowAllMessageButtons;
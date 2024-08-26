"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ShowAllMessageButtons {
  info = {
    name: "Show All Message Buttons",
    id: "arcane:ShowAllMessageButtons",
    authors: [{
      name: "Arcane",
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

exports.default = ShowAllMessageButtons;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425245}*//*SIGNATURE_LXxRSihbWlb2QEPd89ggl5/xtdwsscY+iXSqOZh4B0la4D8ih7uQP4cL3NU85P4UHoh6BE+Z0YeWD07UI4B2lg==*/
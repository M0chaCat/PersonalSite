"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BetterUploadButton {
  info = {
    name: "Re!BetterUploadButton",
    id: "cat.kitties.arcane.BetterUploadButton",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Fawn",
      id: "336678828233588736n"
    },
    {
      name: "Vee",
      id: "343383572805058560n"
    }
  ],
    description: "Upload with a single click, open menu with right click",
    version: "0.1.0",
    patches: [
      {
        find: "Messages.CHAT_ATTACH_UPLOAD_OR_INVITE",
        replacement: {
          // Discord merges multiple props here with Object.assign()
          // This patch passes a third object to it with which we override onClick and onContextMenu
          match: /CHAT_ATTACH_UPLOAD_OR_INVITE,onDoubleClick:(.+?:void 0),\.\.\.(\i),/,
          replace: "$&onClick:$1,onContextMenu:$2.onClick,",
        },
      },
    ],
    preferences: []
  };
}

exports.default = BetterUploadButton;
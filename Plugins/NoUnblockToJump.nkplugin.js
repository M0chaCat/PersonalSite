"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoUnblockToJump {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "No Unblock To Jump",
    id: "arcane:NoUnblockToJump",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Allows you to jump to messages of blocked users without unblocking them",
    version: "0.1.0",
    patches: [
      {
        find: '.id,"Search Results"',
        replacement: {
          match: /if\(.{1,10}\)(.{1,10}\.show\({.{1,50}UNBLOCK_TO_JUMP_TITLE)/,
          replace: "if(false)$1"
        }
      },
      {
        find: "renderJumpButton()",
        replacement: {
          match: /if\(.{1,10}\)(.{1,10}\.show\({.{1,50}UNBLOCK_TO_JUMP_TITLE)/,
          replace: "if(false)$1"
        }
      },
      {
        find: "flash:!0,returnMessageId",
        replacement: {
          match: /.\?(.{1,10}\.show\({.{1,50}UNBLOCK_TO_JUMP_TITLE)/,
          replace: "false?$1"
        }
      }
    ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = NoUnblockToJump;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425160}*//*SIGNATURE_7vTigV+9Pa62NpDGfwz743OCxokmqUCgqk9+Yn/1kmssayvAoCw+OHcO6rbY7SQZDcHz0uNeoj77PPRqP8dUjQ==*/
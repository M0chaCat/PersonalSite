"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class CleanChannelNames {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  };

  info = {
    name: "Clean Channel Names",
    id: "cat.kitties.arcane.CleanChannelNames",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "remove all emoji and decor shit from channel names",
    version: "0.1.0",
    patches: [
      {
        find: "loadAllGuildAndPrivateChannelsFromDisk(){",
        replacement: {
          match: /(?<=getChannel\(\i\)\{if\(null!=\i\)return )\i\(\i\)/,
          replace: "$self.cleanChannelName($&)",
        }
      }
    ],
    preferences: []
  }
  cleanChannelName(channel) {
    if (channel) {
      channel.name = channel.name
      .normalize("NFKC")
      .replace(/[^\u0020-\u007E]?\p{Extended_Pictographic}[^\u0020-\u007E]?/ug, "")
      .replace(/-?[^\p{Letter}\u0020-\u007E]-?/ug, [2, 4].includes(channel.type) ? " " : "-")
      .replace(/(^-|-$)/g, "");
    }
    return channel;
  }
}

exports.default = CleanChannelNames;
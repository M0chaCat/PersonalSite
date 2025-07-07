"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class CleanChannelNames {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  };

  info = {
    name: "Re!CleanChannelNames",
    id: "cat.kitties.arcane.CleanChannelNames",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "remove all emoji and decor shit from channel names",
    version: "1.0.0",
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

exports.default = CleanChannelNames;/*NKSIG_W3sicyI6IkFSdnZyaWp4VGx1ZWxJeXB4TFBmRnlrbzZwWlo1dmpORXJjeFVCWnlBRWhDSTk1RHFCT3dLU2hlZnVBZzNFeGdrTmtTZXhweFhrVzhISnF0ZVRmTDNrcUVBU1NHaXVkUzczZWNhUm5hMEFkZnVEbXN6eEw2bU5MTUVTOUtkdUovd0pWNDI3ZmJsUCtWM0xIa2xZRDluT2dNa01GY3lmb1VhWEwxMW02MEovWW5qY0RpIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
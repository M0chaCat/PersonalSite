"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class test {
  constructor() {
    
  }
  info = {
    name: "Re!ShowHiddenChannels",
    description: "Show channels that you do not have access to view.",
    id: "cat.kitties.arcane.ShowHiddenChannels",
    version: "1.0.0",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "AverageReactEnjoyer",
      id: "1004904120056029256n"
    },
    {
      name: "Vee",
      id: "343383572805058560n"
    },
    {
      name: "BigDuck",
      id: "1024588272623681609n"
    },
    {
      name: "D3SOX",
      id: "201052085641281538n"
    },
    {
      name: "Nuckyz",
      id: "235834946571337729n"
    },
    {
      name: "Nickyux",
      id: "427146305651998721n"
    },
    {
      name: "dzshn",
      id: "310449948011528192n"
    }
  ],
    patches: [
      {
          find: '"placeholder-channel-id"',
          replacement: [
              // Update the regex to ensure it matches correctly
              {
                  match: /(?<=&&)(?=![A-Za-z_$][\w$]*\.[A-Za-z_$][\w$]*\.hasUnread\(this\.record\.id\))/,
                  replace: "$self.isHiddenChannel(this.record)||"
              },
              // Do not check for unreads when selecting the render level if the channel is hidden
              {
                  match: /(?<=&&)(?=!\i\.\i\.hasUnread\(this\.record\.id\))/,
                  replace: "$self.isHiddenChannel(this.record)||"
              },
              // Make channels we dont have access to be the same level as normal ones
              {
                  match: /(activeJoinedRelevantThreads:.{0,50}VIEW_CHANNEL.+?renderLevel:(.+?),threadIds.+?renderLevel:).+?(?=,threadIds)/g,
                  replace: (_, rest, defaultRenderLevel) => `${rest}${defaultRenderLevel}`
              },
              // Remove permission checking for getRenderLevel function
              {
                  match: /(?<=getRenderLevel\(\i\){.+?return)!\i\.\i\.can\(\i\.\i\.VIEW_CHANNEL,this\.record\)\|\|/,
                  replace: " "
              }
          ]
      },
    ],
  };

  isHiddenChannel(channel, checkConnect = false) {
      if (!channel) return false;

      if (channel.channelId) channel = ChannelStore.getChannel(channel.channelId);
      if (!channel || channel.isDM() || channel.isGroupDM() || channel.isMultiUserDM()) return false;

      return checkConnect && !channel.canConnect();
  }

  resolveGuildChannels(channels, shouldIncludeHidden) {
      if (shouldIncludeHidden) return channels;

      const res = {};
      for (const [key, maybeObjChannels] of Object.entries(channels)) {
          if (!Array.isArray(maybeObjChannels)) {
              res[key] = maybeObjChannels;
              continue;
          }

          res[key] ??= [];

          for (const objChannel of maybeObjChannels) {
              if (objChannel.channel.id === null || !this.isHiddenChannel(objChannel.channel)) {
                  res[key].push(objChannel);
              } else {
                  res[key].push(objChannel);
              }
          }
      }

      return res;
  }
};

exports.default = test;
/*NKSIG_W3sicyI6IkFYa0dET1I3cVpEdm1hT1N5QUwySk1JQjJYZzJzMHFwNHZUamdLVnBPRUt4aVNvd3FIK3ZCc2oyQ3BpT2ZEZk9RMnJmNW1ROWRjUzQ2VE93N0VnU1Fid1dBVVJESDI1bUtPbXppUDhnTlJSVkV3c2s1SERjRXE1bHNtdWh1SjdSWjJNcE1Tdk5LbmtySEFmelkyNm9yTVVWTkhJMS9VUnY3N3VnWVFidzRldGhKcnY0In0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
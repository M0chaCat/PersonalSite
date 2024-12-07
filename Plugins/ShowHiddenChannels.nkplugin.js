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

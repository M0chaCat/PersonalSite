"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class Summaries {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.ChannelStore = Nekocord.webpackModules.findByStoreName("ChannelStore");
      this.GuildStore = Nekocord.webpackModules.findByStoreName("GuildStore");
    });
  }
  info = {
    name: "Summaries",
    id: "arcane:Summaries",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Enables Discord's experimental Summaries feature on every server, displaying AI generated summaries of conversations",
    version: "0.1.0",
    patches: [
      {
        find: "SUMMARIZEABLE.has",
        replacement: {
          match: /\i\.hasFeature\(\i\.\i\.SUMMARIES_ENABLED\w+?\)/g,
          replace: "true"
        }
      },
      {
        find: "RECEIVE_CHANNEL_SUMMARY(",
        replacement: {
          match: /shouldFetch\((\i),\i\){/,
          replace: "$& if(!$self.shouldFetch($1)) return false;"
        }
      }
    ],
    preferences: [
      {
        name: "summaryExpiryThresholdDays",
        description: "The time in days before a summary is removed. Note that only up to 50 summaries are kept per channel",
        type: "slider",
        default: 3,
        options: {
          markers: [1, 3, 5, 7, 10, 15, 20, 25, 30],
          stickToMarkers: false
        }
      }
    ]
  };

 async start() {
    await DataStore.update("summaries-data", summaries => {
      summaries = summaries || {};
      for (const key of Object.keys(summaries)) {
        for (let i = summaries[key].length - 1; i >= 0; i--) {
          if (summaries[key][i].time < Date.now() - 1000 * 60 * 60 * 24 * this.userPreferences.summaryExpiryThresholdDays) {
            summaries[key].splice(i, 1);
          }
        }
        if (summaries[key].length === 0) {
          delete summaries[key];
        }
      }
      Object.assign(SummaryStore.allSummaries(), summaries);
      return summaries;
    });
  }

  shouldFetch(channelId) {
    const channel = this.ChannelStore.getChannel(channelId);
    if (!channel) {
      console.log(`Channel not found for ID: ${channelId}`);
      return false;
    }
    if (!channel.guild_id) {
      console.log(`Guild ID not found for channel ID: ${channelId}`);
      return false;
    }
    const guild = this.GuildStore.getGuild(channel.guild_id);
    if (!guild) {
      console.log(`Guild not found for ID: ${channel.guild_id}`);
      return false;
    }
    // @ts-ignore
    const hasFeature = guild.hasFeature("SUMMARIES_ENABLED_GA");
    console.log(`Guild ${channel.guild_id} has feature SUMMARIES_ENABLED_GA: ${hasFeature}`);
    return hasFeature;
  }

  flux = {
    CONVERSATION_SUMMARY_UPDATE: (data) => {
      const incomingSummaries = data.summaries.map(summary => ({
        ...createSummaryFromServer(summary),
        time: Date.now()
      }));
      
      DataStore.update("summaries-data", summaries => {
        summaries = summaries || {};
        if (summaries[data.channel_id]) {
          summaries[data.channel_id].unshift(...incomingSummaries);
        } else {
          summaries[data.channel_id] = incomingSummaries;
        }
        if (summaries[data.channel_id].length > 50) {
          summaries[data.channel_id] = summaries[data.channel_id].slice(0, 50);
        }
        return summaries;
      });
    }
  };
}

exports.default = Summaries;
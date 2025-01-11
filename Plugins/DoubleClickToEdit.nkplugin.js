"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const addClickListener = (callback) => {
    document.addEventListener("click", (event) => {
        const msg = {};
        const channel = {};
        callback(msg, channel, event);
    });
};

class doubleclicktoedit {
  constructor() {
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.ChannelStore = Nekocord.webpackModules.findByStoreName("ChannelStore");
    });
  }

  info = {
    name: "DoubleClickToEdit",
    id: "cat.kitties.arcane.doubleclicktoedit",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Vee",
      id: "343383572805058560n"
    }
  ],
    description: "Double click to edit, based on MessageClickActions from vencord",
    version: "1.0.0",
  };

  onEnable() {
    this.start();
  }

  start() {
    this.onClick = addClickListener((msg, channel, event) => {
        //console.log("Message object:", msg);
        //console.log("Channel object:", channel);

        if (!msg || !msg.author || !channel) {
            //console.error("Message or channel is undefined", { msg, channel });
            return;
        }

        const isMe = msg.author.id === UserStore.getCurrentUser().id;

        if (event.detail < 2) return;
        if (channel.guild_id && !PermissionStore.can(PermissionsBits.SEND_MESSAGES, channel)) return;
        if (msg.deleted === true) return;

        if (isMe) {
            MessageActions.startEditMessage(channel.id, msg.id, msg.content);
            event.preventDefault();
        } else {
            // comment out broken reply functionality
            // const EPHEMERAL = 64;
            // if (msg.hasFlag(EPHEMERAL)) return;

            // const isShiftPress = event.shiftKey;

            // FluxDispatcher.dispatch({
            //     type: "CREATE_PENDING_REPLY",
            //     channel,
            //     message: msg,
            //     showMentionToggle: channel.guild_id !== null
            // });
        }
    });
  }

  stop() {
    removeClickListener(this.onClick);
  }

  onDisable() {
    this.stop();
  }
}

exports.default = doubleclicktoedit;
/*NKSIG_W3sicyI6IkFRL0tkY0hLUmM0TjRQd09KdDdaU0c4SGxkRmxMdDg1V0JGYmsxVDYwcFBHRkorTjgrd21GdlMrTkg4WVZGM3VKbE0rV3NGNVdEMVpMTjl4QWVvMUV5bGZBRUY4UW5YVW9QWEdseXRCbWx1NE9SRkZxRkk1YkJGMU9FVDZLZ1VoNDVoSFlkMUJyZ3NiVjNBaENteUF0VHlma08zVG0ra3QxUVlWR25XWG1adURzRzdVIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
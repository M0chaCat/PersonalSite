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
    }],
    description: "Double click to edit",
    version: "1.0.0"
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

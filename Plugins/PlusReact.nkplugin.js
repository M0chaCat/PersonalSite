"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class PlusReacts {
  constructor(userPreferences) {
    const { getMessages } = this.findByPropsLazy("getMessages");
    this.userPreferences = userPreferences;
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.ChannelStore = Nekocord.webpackModules.findByStoreName("ChannelStore");
      this.GuildStore = Nekocord.webpackModules.findByStoreName("GuildStore");
    });
  }
  info = {
    name: "PlusReact",
    id: "cat.kitties.arcane.PlusReact",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "React to previous message with emoji, like +:star:",
    version: "0.1.0",
    patches: [
      {
          find: ".SLASH_COMMAND_USED,",
          replacement: [
              {
                  match: /\\\+/,
                  replace: "$&" // Only support a single plus
              },
              {
                  match: /\i.trim\(\)/,
                  replace: "$&.replace(/^\\+/, '+')" // Adjust for single plus
              },
              {
                  match: /=(\i\.\i\.getMessages\(\i\.id\))\.last\(\)(?=.{78,85}.getByName\((\i)\.)/,
                  replace: "=$self.getMsgReference()"
              }
          ]
      },
      {
          find: "this.props.activeCommandOption,",
          replacement:[
              {
                  match: /:this.props.currentWord/,
                  replace: "$&.replace(/^\\+/, '+')" // Adjust for single plus
              },
              {
                  match: /this.props.editorRef.current\)return;/,
                  replace: "$&$self.setMsgReference(this.props.currentWord.split(':')[0],this.props.channel.id);"
              }
          ]
      },
    ],
    preferences: []
  };
  message = null;
  getMsgReference() {
      const { message } = this;
      this.message = null;
      return message;
  }
  setMsgReference(plusses, channelId) {
      // Only support a single plus
      this.message = this.getMessages(channelId).getByIndex(this.getMessages(channelId).length - 1); // Always get the last message
  }

  findByPropsLazy(...props) {
    const module = Object.values(Nekocord.webpackModules.modules).find(mod => 
      props.every(prop => prop in mod)
    );
    return module ? module : null;
  }
}
exports.default = PlusReacts;
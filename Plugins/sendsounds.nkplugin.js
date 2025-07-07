"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const sounds = {
  click1: new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click1.wav"),
  click2: new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click2.wav"),
  click3: new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click3.wav")
};

class KeyboardSounds {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.MessageActions = Nekocord.webpackModules.findByProps('sendMessage');
      
      this.messagePatch = Nekocord.webpackPatcher.before('sendMessage', this.MessageActions, (args) => {
        const click = sounds[`click${Math.floor(Math.random() * 3) + 1}`];
        click.currentTime = 0;
        click.play();
      });
    });
  }
  info = {
    name: "SendSounds",
    id: "cat.kitties.arcane.SendSounds",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Play sounds when you send a message",
    version: "1.0.0",
    patches: [],
    preferences: [{
      name: "Volume",
      description: "Volume",
      id: "volume",
      type: "number",
      default: 100,
      options: {
        minValue: 3,
        maxValue: 100,
      },
    }, {
      name: "Clicky Sound",
      description: "Enable clicky sound",
      id: "clickySounds",
      type: "boolean",
      default: false,
    }, {
      name: "Tactile Sound",
      description: "Enable tactile sound",
      id: "tactileSounds",
      type: "boolean",
      default: false,
    }, {
      name: "Soft Sound",
      description: "Enable soft sound",
      id: "softSounds",
      type: "boolean",
      default: false,
    }, {
      name: "Fart Sound",
      description: "Enable fart sound",
      id: "fartSounds",
      type: "boolean",
      default: false,
    }, {
      name: "Meow Sound",
      description: "Enable meow sound",
      id: "meowSounds",
      type: "boolean",
      default: true,
    }, {
      name: "Osu Sound",
      description: "Enable osu sound",
      id: "osuSounds",
      type: "boolean",
      default: false,
    }],
  };

  onEnable() {
    const volume = this.userPreferences.volume;
    
    if (this.userPreferences.clickySounds) {
      sounds.click1 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click1.wav");
      sounds.click2 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click2.wav");
      sounds.click3 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click3.wav");
    } else if (this.userPreferences.tactileSounds) {
      sounds.click1 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Tactile/sounds/tactile1.wav");
      sounds.click2 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Tactile/sounds/tactile2.wav");
      sounds.click3 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Tactile/sounds/tactile3.wav");
    } else if (this.userPreferences.softSounds) {
      sounds.click1 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/LoFi_Chill/sounds/keyboard1.wav");
      sounds.click2 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/LoFi_Chill/sounds/keyboard2.wav");
      sounds.click3 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/LoFi_Chill/sounds/keyboard3.wav");
    } else if (this.userPreferences.fartSounds) {
      sounds.click1 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Fart/sounds/keyboard1.mp3");
      sounds.click2 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Fart/sounds/spacebar.mp3");
      sounds.click3 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Fart/sounds/keyboard3.mp3");
    } else if (this.userPreferences.meowSounds) {
      sounds.click1 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Meow/sounds/CatSounds_Meow1.mp3");
      sounds.click2 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Meow/sounds/CatSounds_Meow2.mp3");
      sounds.click3 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Meow/sounds/CatSounds_Meow3.mp3");
    } else if (this.userPreferences.osuSounds) {
      sounds.click1 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/osu/key-press-1.mp3");
      sounds.click2 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/osu/key-press-2.mp3");
      sounds.click3 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/osu/key-press-3.mp3");
    }
    
    for (const sound of Object.values(sounds)) sound.volume = volume / 100;
  }

  onDisable() {
    if (this.messagePatch) this.messagePatch();
  }

  handleVolumeChange(value) {
    for (const sound of Object.values(sounds)) sound.volume = value / 100;
  }

  onPreferencesChange(userPreferences) {
    this.userPreferences = userPreferences;
    this.onEnable(); // Reload sounds when preferences change
  }
}
exports.default = KeyboardSounds;/*NKSIG_W3sicyI6IkFJREhrRjg1aDFTb0lOaXZrWWsvaVVxNXBTdUR1T0tKOUlRTkhaNldwZi9JbTBTZ3lPMWZMQzNaMC92QmhRWm4vdFpIOFA2cmROOGpFV0NFT2ZhWGNpVWlBV2MzK09BeG10Y240MVZYeXROQjBxMkZWTFROMDZxTmFMUzcwRW1qakpBRVpJRWY5ajBKbU5ZYm9id0lQUEorSTVFRitJeDZ0cnZJQjJFUDB1Z0tsSm53In0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
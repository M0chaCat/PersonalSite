//https://github.com/Domis-Vencord-Plugins/KeyboardSounds/blob/main/index.ts
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const sounds = {
  click1: new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click1.wav"),
  click2: new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click2.wav"),
  click3: new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click3.wav"),
  backspace: new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/backspace.wav")
};

const ignoredKeys = [
  "CapsLock",
  "ShiftLeft",
  "ShiftRight",
  "ControlLeft",
  "ControlRight",
  "AltLeft",
  "AltRight",
  "MetaLeft",
  "MetaRight",
  "ArrowUp",
  "ArrowRight",
  "ArrowLeft",
  "ArrowDown",
  "MediaPlayPause",
  "MediaStop",
  "MediaTrackNext",
  "MediaTrackPrevious",
  "MediaSelect",
  "MediaEject",
  "MediaVolumeUp",
  "MediaVolumeDown",
  "AudioVolumeUp",
  "AudioVolumeDown"
];

const keydown = (e) => {
  if (ignoredKeys.includes(e.code)) return;
  for (const sound of Object.values(sounds)) sound.pause();
  if (e.code === "Backspace") {
      sounds.backspace.currentTime = 0;
      sounds.backspace.play();
      //console.log("Playing backspace sound");
  } else {
      const click = sounds[`click${Math.floor(Math.random() * 3) + 1}`];
      click.currentTime = 0;
      click.play();
      //console.log("Playing click sound");
  }
};

class KeyboardSounds {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.ChannelStore = Nekocord.webpackModules.findByStoreName("ChannelStore");
      this.GuildStore = Nekocord.webpackModules.findByStoreName("GuildStore");
      this.ReadStateStore = Nekocord.webpackModules.findByStoreName("ReadStateStore");
      this.useStateFromStores = Nekocord.webpackModules.findByStoreName("useStateFromStores");
    });
  }
  info = {
    name: "KeyboardSounds",
    id: "cat.kitties.arcane.KeyboardSounds",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Play sounds when you press a key",
    version: "0.1.0",
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
      name: "Clicky Sounds",
      description: "Enable clicky sounds",
      id: "clickySounds",
      type: "boolean",
      default: true,
    }, {
      name: "Tactile Sounds",
      description: "Enable tactile sounds",
      id: "tactileSounds",
      type: "boolean",
      default: false,
    }, {
      name: "Soft Sounds",
      description: "Enable soft sounds",
      id: "softSounds",
      type: "boolean",
      default: false,
    }, {
      name: "Fart Sounds",
      description: "Enable fart sounds",
      id: "fartSounds",
      type: "boolean",
      default: false,
    }, {
      name: "Meow Sounds",
      description: "Enable meow sounds",
      id: "meowSounds",
      type: "boolean",
      default: false,
    }, {
      name: "Osu Sounds",
      description: "Enable osu sounds",
      id: "osuSounds",
      type: "boolean",
      default: false,
    }],
  };
  onEnable() {
    const volume = this.userPreferences.volume;
    const isClickySounds = this.userPreferences.clickySounds;
    const isTactileSounds = this.userPreferences.tactileSounds;
    const isSoftSounds = this.userPreferences.softSounds;
    const isFartSounds = this.userPreferences.fartSounds;
    const isMeowSounds = this.userPreferences.meowSounds;
    const isOsuSounds = this.userPreferences.osuSounds;

    if (isClickySounds) {
      // Load clicky sounds
      sounds.click1 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click1.wav");
      sounds.click2 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click2.wav");
      sounds.click3 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/click3.wav");
      sounds.backspace = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/OperaGX/backspace.wav");
    } else if (isTactileSounds) {
      // Load tactile sounds
      sounds.click1 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Tactile/sounds/tactile1.wav"); 
      sounds.click2 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Tactile/sounds/tactile2.wav"); 
      sounds.click3 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Tactile/sounds/tactile3.wav"); 
      sounds.backspace = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Tactile/sounds/tactilebackspace.wav"); 
    } else if (isSoftSounds) {
      // Load soft sounds
      sounds.click1 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/LoFi_Chill/sounds/keyboard1.wav");
      sounds.click2 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/LoFi_Chill/sounds/keyboard2.wav");
      sounds.click3 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/LoFi_Chill/sounds/keyboard3.wav");
      sounds.backspace = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/LoFi_Chill/sounds/keyboard4.wav");
    } else if (isFartSounds) {
      // Load fart sounds
      sounds.click1 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Fart/sounds/keyboard1.mp3");
      sounds.click2 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Fart/sounds/spacebar.mp3");
      sounds.click3 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Fart/sounds/keyboard3.mp3");
      sounds.backspace = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Fart/soundas/keyboard4.mp3");
    } else if (isMeowSounds) {
      // Load meow sounds
      sounds.click1 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Meow/sounds/CatSounds_Meow1.mp3");
      sounds.click2 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Meow/sounds/CatSounds_Meow2.mp3");
      sounds.click3 = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Meow/sounds/CatSounds_Meow3.mp3");
      sounds.backspace = new Audio("https://github.com/opera-gaming/gxmods/raw/main/mods/Meow/sounds/CatSounds_Meow4.mp3");
    } else if (isOsuSounds) {
      // Load osu sounds
      sounds.click1 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/osu/key-press-1.mp3");
      sounds.click2 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/osu/key-press-2.mp3");
      sounds.click3 = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/osu/key-press-3.mp3");
      sounds.backspace = new Audio("https://github.com/Domis-Vencord-Plugins/KeyboardSounds/raw/main/sounds/osu/key-delete.mp3");
    }
    for (const sound of Object.values(sounds)) sound.volume = volume / 100;
    document.addEventListener("keydown", keydown);
    //console.log("Keydown event listener added");
  }
  onDisable() {
    document.removeEventListener("keydown", keydown);
  }
  handleVolumeChange(value) {
    for (const sound of Object.values(sounds)) sound.volume = value / 100;
  }
  onPreferencesChange(userPreferences) {
    this.userPreferences = userPreferences;
    this.handleVolumeChange(userPreferences.volume);
  }
}
exports.default = KeyboardSounds;
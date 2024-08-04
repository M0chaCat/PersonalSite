"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Essentials {
  info = {
    name: "Essentials",
    id: "arcane:Essentials",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Minor tweaks that make discord better!",
    version: "1.0.0",
    patches: [],
    preferences: [
      {
        name: "ArcaneTweaks",
        description: "CSS Tweaks called ArcaneTweaks",
        id: "ArcaneTweaks",
        type: "boolean",
        default: true
      },
    ]
  };

  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  onPreferencesChange(userPreferences) {
    this.userPreferences = userPreferences;
   this.tryToEnableTweaks();
   this.enableSitelenPona();
  }

  tryToEnableTweaks() {
    if (this.userPreferences.ArcaneTweaks === true) {
      const Css = `@import url('https://arcane.kitties.cat/Themes/ArcaneTweaks.nktheme.css');`;
      // Ensure the DOM is fully loaded before applying CSS
      if (document.readyState === 'complete') {
        this.applyCss(Css);
      } else {
        window.addEventListener('load', () => this.applyCss(Css));
      }
    }
  }
  enableSitelenPona() {
      const Css = `@import url('https://arcane.kitties.cat/Themes/sitelenpona.nktheme.css');`;
      // Ensure the DOM is fully loaded before applying CSS
      if (document.readyState === 'complete') {
        this.applyCss(Css);
      } else {
        window.addEventListener('load', () => this.applyCss(Css));
      }
  }
  // Function to apply css
  applyCss(css) {
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    
    if (document.head) {
      document.head.appendChild(styleElement);
      console.log(`Essentials: ArcaneTweaks applied successfully`);
    } else {
      console.error("Essentials: document.head is null or undefined");
    }
  }
}
exports.default = Essentials;
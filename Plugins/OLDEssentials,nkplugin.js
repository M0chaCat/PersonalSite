"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Essentials {
  info = {
    name: "Essentials",
    id: "cat.kitties.arcane.Essentials",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Minor tweaks that make discord better!",
    version: "1.0.0",
    patches: [],
    preferences: [
      {
        name: "MochaTweaks",
        description: "CSS Tweaks called MochaTweaks",
        id: "MochaTweaks",
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
    if (this.userPreferences.MochaTweaks === true) {
      const Css = `@import url('https://arcane.kitties.cat/Themes/MochaTweaks.nktheme.css');`;
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
      console.log(`Essentials: MochaTweaks applied successfully`);
    } else {
      console.error("Essentials: document.head is null or undefined");
    }
  }
}
exports.default = Essentials;/*NKSIG_W3sicyI6IkFKWWxTVXhFV0x6VE1qNnJpSDVMU1p2bEJHTU9DY1d6NFN2NjFVOVNCdUZnQ3JsUE1MNEdWaDZuQ0ZZckM3RE8vSzZuaXlIL3AxZjFrKzhNVEdEYStvOHpBYWNmalRTNlFObFVqTTBOcTBIL3FkT2krbTJLOGxmQnl5M0tjOUx4aTAvbVBWRTRoZXI4b1NyRnpua3lPczJZVkllWmZESW5EdENtQ2tLNHV3c3dmZVluIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
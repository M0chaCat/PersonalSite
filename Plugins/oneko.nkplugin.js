"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Oneko {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      // Initialize other things if necessary
    });
  }

  info = {
    name: "oneko",
    id: "cat.kitties.arcane.oneko",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "cat follow mouse (real)",
    version: "1.0.0"
  };

  onEnable() {
    this.start();
  }

  start() {
    console.log("oneko: meow!");
    
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        this.appendScript();
      });
    } else {
      this.appendScript();
    }
  }

  appendScript() {
    fetch("https://raw.githubusercontent.com/adryd325/oneko.js/8fa8a1864aa71cd7a794d58bc139e755e96a236c/oneko.js")
    .then(x => x.text())
    .then(s => s.replace("./oneko.gif", "https://raw.githubusercontent.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f99f42/oneko.gif")
      .replace("(isReducedMotion)", "(false)"))
    .then(eval);
  }

  onDisable() {
    document.getElementById("oneko")?.remove();
  }
}

exports.default = Oneko;
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
    id: "arcane:oneko",
    authors: [{
      name: "Arcane",
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
    const script = document.createElement("script");
    script.src = "https://rawcdn.githack.com/MeowArcane/nekothemes/53de1a343407fd2c35a6247f635113c2d2d43b04/oneko.js";
    document.head.appendChild(script);
  }

  onDisable() {
    document.getElementById("oneko")?.remove();
  }
}

exports.default = Oneko;
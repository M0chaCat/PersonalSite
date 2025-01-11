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
    },
    {
      name: "Vee",
      id: "343383572805058560n"
    },
    {
      name: "adryd",
      id: "201052085641281538n"
    }
  ],
    description: "cat follow mouse (real)",
    version: "1.0.0"
  };

  onEnable() {
    this.start();
  }

  start() {
    //console.log("oneko: meow!");
    
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

exports.default = Oneko;/*NKSIG_W3sicyI6IkFVRlNYS3hrUmRTSm9zOUcySUloS09Ed1BkSml2ZTVmZ2dQT0VDRlc4WGNlZUtFRWZlTnhNSHBoVThlUzdTMFVHdEJtRWI2Y2FNKzRsTk1wSmJuRFNWV3ZBTlJDTTVwdTcvVklDcDJZS2xPTGdaZkJJbEVMYm5acG1zekF4dGNFUmRZWnNZTG9zeXNON0hxQXF6TFh1R0JudmZoNXF0dWJwQlVJT0w4dkQzYTVxekNiIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
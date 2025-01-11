"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class nyancat {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      // Initialize other things if necessary
    });
  }

  info = {
    name: "NyanCat",
    id: "cat.kitties.arcane.nyancat",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "NyanCat!!",
    version: "1.0.0"
  };

  onEnable() {
    this.start();
  }

  start() {
    // summons nyan
    const nyanCat = document.createElement('div');
    nyanCat.id = 'nyan-cat';
    document.body.appendChild(nyanCat);

    const nyanCatStyles = `
      #nyan-cat {
        position: absolute;
        width: 150px;
        height: 75px;
        background-image: url('https://static.wikia.nocookie.net/nyancat/images/b/b9/OriginalNyan.gif');
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 9999;
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = nyanCatStyles;
    document.head.appendChild(styleSheet);

    // sets initial position and velocity
    let posX = Math.random() * (window.innerWidth - 150);
    let posY = Math.random() * (window.innerHeight - 75);
    let velocityX = 2;
    let velocityY = 2;

    function updateNyanCatPosition() {
      posX += velocityX;
      posY += velocityY;

    // makes it bouncy
    if (posX <= 0 || posX >= window.innerWidth - 150) {
        velocityX = -velocityX;
    }
    if (posY <= 0 || posY >= window.innerHeight - 75) {
        velocityY = -velocityY;
    }

    nyanCat.style.transform = `translate(${posX}px, ${posY}px)`;

    requestAnimationFrame(updateNyanCatPosition);
}

    // starts the animation
    requestAnimationFrame(updateNyanCatPosition);
  }


  onDisable() {
    document.getElementById("nyan-cat")?.remove();
  }
}

exports.default = nyancat;/*NKSIG_W3sicyI6IkFTWDVKVGtCUVZzMm0yWThQZGw2cGczRnNiWCtJdWtaeFJ5L29iREJGeVdweWo0ZkFKV2xYaXVkQjV0TFl4cTQ5T2o3K3dDN1BRYTJqSktXaVg1VnA1bC9BTXBQa1M4YWpuaVV1c3lZcFk2ZGZZQUV5bCtGTjdTVXpIenc1VmNOM290NEhJUG9jMjRLVmQ4REE1eFBnU2Zwa0J2bUJCUU1UT2hrcnQ2NEthaW5uOUhpIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
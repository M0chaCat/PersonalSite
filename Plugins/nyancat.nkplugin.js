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

exports.default = nyancat;
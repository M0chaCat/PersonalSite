"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AlwaysAnimate {
  info = {
    name: "Always Animate",
    id: "arcane:AlwaysAnimate",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    description: "Animates anything that can be animated",
    version: "0.1.0",
    patches: [
      {
        find: "canAnimate:",
        all: true,
        // Some modules match the find but the replacement is returned untouched
        noWarn: true,
        replacement: {
          match: /canAnimate:.+?([,}].*?\))/g,
          replace: (m, rest) => {
            const destructuringMatch = rest.match(/}=.+/);
            if (destructuringMatch == null) return `canAnimate:!0${rest}`;
            return m;
          }
        }
      },
      {
        // Status emojis
        find: ".Messages.GUILD_OWNER,",
        replacement: {
          match: /(?<=\.activityEmoji,.+?animate:)\i/,
          replace: "!0"
        }
      },
      {
        // Guild Banner
        find: ".animatedBannerHoverLayer,onMouseEnter:",
        replacement: {
          match: /(?<=guildBanner:\i,animate:)\i(?=}\))/,
          replace: "!0"
        }
      }
    ]
  };

  constructor() {}

}

exports.default = AlwaysAnimate;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425410}*//*SIGNATURE_5S8R37CW0v1cJ3i3kh87sEeWXbeCW2ZGaWhPGKxYCat8x+A8oekiUou4CakOw91v55WF1XRQs2gDa7rUcJnzbA==*/

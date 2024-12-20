"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AlwaysAnimate {
  info = {
    name: "Re!AlwaysAnimate",
    id: "cat.kitties.arcane.AlwaysAnimate",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Fiery",
      id: "890228870559698955n"
    }
  ],
    description: "Animates anything that can be animated",
    version: "1.0.0",
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
        find: ".pclUFB", //intl::GUILD_OWNER
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
    ],
  };

    
}

exports.default = AlwaysAnimate;

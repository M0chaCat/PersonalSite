"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class renomosaic {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!NoMosaic",
    id: "cat.kitties.arcane.renomosaic",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Removes Discord image mosaic",
    version: "0.1.0",
    patches: [
      {
          find: '=>"IMAGE"===',
          replacement: {
              match: /=>"IMAGE"===\i\|\|"VIDEO"===\i(?:\|\|("VISUAL_PLACEHOLDER"===\i))?;/,
              replace: (_, visualPlaceholderPred) => visualPlaceholderPred != null ? `=>${visualPlaceholderPred};` : "=>false;"
          }
      },
      {
          find: "renderAttachments(",
          predicate: () => this.userPreferences.inlineVideo,
          replacement: {
              match: /url:(\i)\.url\}\);return /,
              replace: "$&$1.content_type?.startsWith('image/')&&"
          }
      },
  ],

    preferences: [
      {
        name: "inlineVideo",
        description: "Play videos without carousel modal",
        type: "boolean",
        default: true,
        restartNeeded: true
      }
    ],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = renomosaic;
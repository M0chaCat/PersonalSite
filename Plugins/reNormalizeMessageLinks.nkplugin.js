"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class renormalizemessagelinks {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  info = {
    name: "Re!NormalizeMessageLinks",
    id: "cat.kitties.arcane.normalizemessagelinks",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "bb010g",
      id: "72791153467990016n"
    }
  ],
    description: "Strip canary/ptb from message links",
    version: "0.1.0",
    patches: [
      {
        find: "#{intl::COPY_MESSAGE_LINK}",
        replacement: {
          match: /\.concat\(location\.host\)/,
          replace: ".concat($self.normalizeHost(location.host))",
        },
      },
    ],

    preferences: [],
  };

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }

}

exports.default = renormalizemessagelinks;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class UnlimitedAccounts {
  constructor() {
    this.intervalId = null;
  }

  info = {
    name: "Unlimited Accounts",
    description: "Increases the amount of accounts you can add.",
    id: "arcane:UnlimitedAccounts",
    authors: [{
      name: "Arcane",
      id: "808802000224518264"
    }],
    version: "1.0.0",
    patches: [
      {
        find: "multiaccount_cta_tooltip_seen",
        replacement: {
          match: /(let \i=)\d+(,\i="switch-accounts-modal",\i="multiaccount_cta_tooltip_seen")/,
          replace: "$1Infinity$2",
        },
      },
    ],
  };
}

exports.default = UnlimitedAccounts;
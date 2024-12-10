"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class SecretRingToneEnabler {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }

    info = {
      name: "Re!SecretRingToneEnabler",
      id: "cat.kitties.arcane.SecretRingToneEnabler",
      authors: [{
        name: "Mocha",
        id: "808802000224518264"
      },
      {
        name: "FieryFlames",
        id: "890228870559698955n"
      },
      {
        name: "AndrewDLO",
        id: "434135504792059917n"
      },
      {
        name: "RamziAH",
        id: "1279957227612147747n"
      }
    ],
      description: "Always play the secret version of the discord ringtone (except during special ringtone events)",
      version: "1.0.0",
      patches: [
        {
          find: '"call_ringing_beat"',
          replacement: {
            match: /500!==\i\(\)\.random\(1,1e3\)/,
            replace: "false",
          }
        },
      ],
      preferences: []
  }

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }
  //other code here!
}

exports.default = SecretRingToneEnabler;
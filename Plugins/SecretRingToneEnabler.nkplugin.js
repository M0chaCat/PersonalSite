"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class SecretRingToneEnabler {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }

    info = {
      name: "Secret Ringtone Enabler",
      id: "arcane:SecretRingToneEnabler",
      authors: [{
        name: "Arcane",
        id: "808802000224518264"
      }],
      description: "Always play the secret version of the discord ringtone (except during special ringtone events)",
      version: "0.1.0",
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

exports.default = SecretRingToneEnabler;/*NEKOCORD_TEAM_{"signed_by":"M0cha","signed_at":1724648425203}*//*SIGNATURE_Ol5LuCYXikc3uvbkbXGLsxN6ZngRDWP2m+tPPWLrZ7Pp2CQWpHYe7w0zb8g25K3gMFQ4VTJXiDNSE6Pl87oj0g==*/
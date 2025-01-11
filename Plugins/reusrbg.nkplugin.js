"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
const API_URL = "https://usrbg.is-hardly.online/users";
class reusrbg {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
    this.data = null;
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.WebpackModules = Nekocord.webpackModules;
      this.ChannelStore = Nekocord.webpackModules.findByStoreName("ChannelStore");
      this.GuildStore = Nekocord.webpackModules.findByStoreName("GuildStore");
    });
  }
  styles = `
    :is([class*="userProfile"], [class*="userPopout"]) [class*="bannerPremium"] {
    background: center / cover no-repeat;
}

[class*="NonPremium"]:has([class*="bannerPremium"]) [class*="avatarPositionNormal"],
[class*="PremiumWithoutBanner"]:has([class*="bannerPremium"]) [class*="avatarPositionPremiumNoBanner"] {
    top: 76px;
}

[style*="background-image"] [class*="background_"] {
    background-color: transparent !important;
}
  `;
  info = {
    name: "Re!USRBG",
    id: "cat.kitties.arcane.reusrbg",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "AutumnVN",
      id: "440990343899643943n"
    },
    {
      name: "TheKodeToad",
      id: "706152404072267788n"
    },
    {
      name: "Pylix",
      id: "492949202121261067n"
    },
    {
      name: "Katlyn",
      id: "250322741406859265n"
    }
  ],
    description: "User profile banners for Nekocord before NitroHaxx :3. (Banners are fetched from the USRBG database.)",
    version: "1.0.0",
    preferences: [
      {
        name: "nitroFirst",
        description: "Use Nitro banner if both Nitro and USRBG banners are present",
        type: "boolean",
        default: true,
        // Ensure that this preference is handled independently
      },
      {
        name: "voiceBackground",
        description: "Use USRBG banners as voice chat backgrounds",
        type: "boolean",
        default: true,
        restartNeeded: true,
        // Ensure that this preference is handled independently
      }
    ],
    patches: [
      {
        find: '.banner)==null?"COMPLETE"',
        replacement: {
          match: /(?<=void 0:)\i.getPreviewBanner\(\i,\i,\i\)/,
          replace: "$self.patchBannerUrl(arguments[0])||$&"
        }
      },
      {
        find: '"data-selenium-video-tile":',
        predicate: () => this.userPreferences.voiceBackground,
        replacement: [
          {
            match: /(?<=function\((\i),\i\)\{)(?=let.{20,40},style:)/,
            replace: "$1.style=$self.getVoiceBackgroundStyles($1);"
          }
        ]
      }
    ]
  };
  settingsAboutComponent() {
    return null;
  }
  getVoiceBackgroundStyles({ className, participantUserId }) {
    if (className.includes("tile_")) {
      if (this.userHasBackground(participantUserId)) {
        return {
          backgroundImage: `url(${this.getImageUrl(participantUserId)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        };
      }
    }
  }
  patchBannerUrl({ displayProfile }) {
    if (displayProfile?.banner && this.userPreferences.nitroFirst === true) return;
    if (this.userHasBackground(displayProfile?.userId)) return this.getImageUrl(displayProfile?.userId);
  }
  userHasBackground(userId) {
    return !!this.data?.users[userId];
  }
  getImageUrl(userId) {
    if (!this.userHasBackground(userId)) return null;
    const { endpoint, bucket, prefix, users: { [userId]: etag } } = this.data;
    return `${endpoint}/${bucket}/${prefix}${userId}?${etag}`;
  }
  applyCss(css) {
    const style2 = document.createElement("style");
    style2.textContent = css;
    document.head.appendChild(style2);
    this.styleElement = style2;
  }
  async onEnable() {
    if (document.readyState === "complete") {
      this.applyCss(this.styles);
    } else {
      window.addEventListener("load", () => this.applyCss(this.styles));
    }
    //enableStyle(style);
    const res = await fetch(API_URL);
    if (res.ok) {
      this.data = await res.json();
    }
  }
  onDisable() {
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
  }
}
exports.default = reusrbg;
/*NKSIG_W3sicyI6IkFWSTFmRFpuQmFrL2xMTWdUYVI0YlYzaWFweFFQVkRlRDF2bVc0amE1NEl6bk9LQkJLWnh2YU5LOG1Rb2VxL3RYOGNVNlBqMm4vVGVDVmh1bnBFWEc4UWxBUG1JYVNMYVFHSDJTSkgyL0ttZWowdExyRGdacHU3SzQyOTZqSWxQZXBFMFM3a2wvUGxTOXFMRnAzRGsvbnNtQ0JPT1k4QWtJQmFEZm4walZBbEFlYmJFIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/
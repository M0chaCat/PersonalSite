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
    }],
    description: "User profile backgrounds for Nekocord before NitroHaxx :3. (Banners are fetched from the USRBG database.)",
    version: "0.1.0",
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

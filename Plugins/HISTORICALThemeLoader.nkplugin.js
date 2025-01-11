"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class ThemeLoader {
  themes = [
    {
      name: "Custom CSS",
      description: "This theme loads the CSS from the pref!",
      id: "dummy",
      css: ``
    },
    {
      name: "onekos",
      description: "onekos everywhere!!!!",
      id: "onekos",
      css: `
@import url('https://rawcdn.githack.com/MCHAMSTERYT2/onekocord/d930e35aea0031ec9a39390416e4faefa84c3777/onekoanimations.css')
@import url('https://rawcdn.githack.com/MCHAMSTERYT2/onekocord/d930e35aea0031ec9a39390416e4faefa84c3777/onekoavatar.css')
@import url('https://rawcdn.githack.com/MCHAMSTERYT2/onekocord/d930e35aea0031ec9a39390416e4faefa84c3777/onekohomeicon.css')
@import url('https://rawcdn.githack.com/MCHAMSTERYT2/onekocord/d930e35aea0031ec9a39390416e4faefa84c3777/onekomessagebar.css')
@import url('https://rawcdn.githack.com/MCHAMSTERYT2/onekocord/d930e35aea0031ec9a39390416e4faefa84c3777/onekomessagebarwalk.css')
@import url('https://rawcdn.githack.com/MCHAMSTERYT2/onekocord/d930e35aea0031ec9a39390416e4faefa84c3777/onekotoolbox.css')
@import url('https://rawcdn.githack.com/MCHAMSTERYT2/onekocord/d930e35aea0031ec9a39390416e4faefa84c3777/onekowelcome.css')
`
    },
    {
      name: "Flashcord",
      description: "The world's most advanced, complex and feature rich Discord Theme to ever exist",
      id: "flashcord",
      css: `
@import url('https://raw.githack.com/MeowArcane/nekothemes/main/lpm.css');
@import url("https://sirio-network.com/flashcord/store/modules/siriusbyt/infinite_chat_effects/main.css")
:root {
      --Flashcord-Configurator: "Build 240502";
      --Flashcord-Module_Idle_Optimizations: FCM-Idle_Max;
      --Flashcord-Module_Chat-Slide: void;
      --Flashcord-Module_Member-Slide: void;
      --Flashcord-Module_Guild: void;
      --Flashcord-Module_Blackout: void;
}
`
    }, 
    {
      name: "Modern Indicators",
      description: "Updates Discord's indicators to feel more modern.",
      id: "modernindicators",
      css: `@import url('https://discord-extensions.github.io/modern-indicators/src/source.css');`
    }, 
    {
      name: "Catppuccin Mocha",
      description: "A darkened discord theme. Based on catppuccin theme",
      id: "midnightcatppuccin",
      css: `@import url('https://rawcdn.githack.com/refact0r/midnight-discord/3ec7382c2f118b2b3c012b7704221c72d176fe81/flavors/midnight-catppuccin-mocha.theme.css');`
    }, 
    {
      name: "Exponent",
      description: "A Windows XP style theme",
      id: "Exponent",
      css: `@import url(https://rawcdn.githack.com/Saltssaumure/xp-discord-theme/aaf1a3af7dfded1e3a92bbae52a0607f72539e3d/Exponent.theme.css)`
    },
    {
      name: "NineX",
      description: "A Windows 9x style Discord theme",
      id: "NineX",
      css: `@import url(https://rawcdn.githack.com/Saltssaumure/w9x-discord-theme/007f3d58aeebf1cfd3e4f94c7215259c7cd5dbb3/NineX.theme.css);`
    },
    {
      name: "Discord 11",
      description: " Based on Windows 11's UI",
      id: "Discord11",
      css: `@import url(https://rawcdn.githack.com/zuzumi-f/Discord-11/fc811f7920a61e34f43b633666bc951918bba51a/Discord11.theme.css)`
    },
    {
      name: "piOS",
      description: "A SUPERHOT piOS inspired theme",
      id: "piOS",
      css: `@import url(https://rawcdn.githack.com/Saltssaumure/pios-discord-theme/1f46fec1b1cbe55c36e789ae4dbc5346cf98670b/piOS.theme.css) `
    },
    {
      name: "DTM-16",
      description: "Formerly known as Oldcord, this theme tries to bring back the 2016 look of Discord",
      id: "DTM16",
      css: `
@import url(https://xyzenix.github.io/XYZenixThemes/DTM-16-V5/DTM-16.css);
:root {
--showRtcConnectionStatusIcon: block; /* show the vc ping/status icon | block = show | none = hide */
--jumboEmojiSize: 2rem; /* Old - 2rem | New - 3rem */
}`
    },
    {
      name: "Spotify Discord",
      description: "Combine Discord and Spotify into one",
      id: "SpotifyDiscord",
      css: `@import url(https://rawcdn.githack.com/CapnKitten/Spotify-Discord/9984ccda043f3fc9b715991eadd81db62c153026/Spotify-Discord.theme.css);`
    },
    {
      name: "Material Discord",
      description: "A theme based on Google's Material Design",
      id: "MaterialDiscord",
      css: `@import url(https://rawcdn.githack.com/CapnKitten/Material-Discord/91959e755bcc4b7c5b62de49b89b377082b075ed/Material-Discord.theme.css);`
    },
    {
      name: "RadialStatus",
      description: "Changes the status icons to wrap around the avatar",
      id: "RadialStatus",
      css: `@import url("https://raw.githubusercontent.com/DiscordStyles/RadialStatus/deploy/RadialStatus.theme.css");`
    },
    {
      name: "Discolored",
      description: "Colorize Discord's boring SVGs",
      id: "Discolored",
      css: `@import url("https://nyri4.github.io/Discolored/support/discolored.theme.css");`
    },

    {
      name: "LilyPichu",
      description: "A theme based on @Melonturtle_ stream design",
      id: "LilyPichu",
      css: `@import url("https://nyri4.github.io/LilyPichu/lilypichu.theme.css");`
    },
    {
      name: "Horizontal Server List",
      description: "Moves the server list from the left to the top of Discord",
      id: "HorizontalServerList",
      css: `
@import url("https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css");
:root {
  --HSL-server-icon-size: 40px;  /* Size of the server icons | DEFAULT: 40px */
  --HSL-server-spacing: 10px;  /* Spacing between each server icon | DEFAULT: 10px */
  --HSL-server-direction: column; /* Direct of the server list. | Options: column, column-reverse | DEFAULT: column */
}`
    },
    {
      name: "Bottom Horizontal Server List",
      description: "Moves the server list from the left to the bottom of Discord",
      id: "BottomHorizontalServerList",
      css: `
@import url("https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css");
@import url("https://discordstyles.github.io/Addons/bottomhsl.css");
:root {
  --HSL-server-icon-size: 40px;  /* Size of the server icons | DEFAULT: 40px */
  --HSL-server-spacing: 10px;  /* Spacing between each server icon | DEFAULT: 10px */
  --HSL-server-direction: column; /* Direct of the server list. | Options: column, column-reverse | DEFAULT: column */
}`
    },
{
    name: "Sitelen Pona",
    description: "UCSUR Sitelen Pona",
    id: "SitelenPona",
    css: `@import url('https://rawcdn.githack.com/MeowArcane/nekothemes/647b1d94e586c39765edf042dec4c00321c03ff9/sitelenpona.theme.css');`
  }, 
{
    name: "Rainbow Crystals",
    description: "",
    id: "RainbowCrystals",
    css: `@import url('https://rawcdn.githack.com/MeowArcane/nekothemes/647b1d94e586c39765edf042dec4c00321c03ff9/RainbowCrystals.theme.css');`
  }
];


  info = {
    name: "Themess",
    id: "cat.kitties.arcane.themess",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Crappy Theme Loader",
    version: "0.1.0",
    patches: [],
    preferences: this.themes.flatMap(theme => ({
      name: theme.name,
      description: theme.description,
      id: theme.id,
      type: "boolean",
      default: false
    })).concat({
      name: "Custom CSS",
      description: "Custom CSS for the Dummy theme",
      id: "customCss",
      type: "string",
      default: ""
    })
  };
  
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
  }
  
  applySelectedThemes() {
    // Clear existing theme styles
    const existingStyles = document.querySelectorAll('style[data-theme]');
    existingStyles.forEach(style => style.remove());
    
    this.themes.forEach(theme => {
      const isEnabled = this.userPreferences[theme.id];
      if (isEnabled) {
        if (theme.id === "dummy") {
          const customCssPref = "customCss"; // Change this to your custom preference ID
          const customCss = this.userPreferences[customCssPref];
          if (customCss) {
            this.applyThemeStyles(theme, customCss);
          }
        } else {
          this.applyThemeStyles(theme, theme.css);
        }
      }
    });
  }
  
  applyThemeStyles(theme, css) {
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    styleElement.setAttribute('data-theme', theme.id);
    
    if (document.head) {
      document.head.appendChild(styleElement);
      console.log(`Theme '${theme.name}' styles applied successfully`);
    } else {
      console.error("document.head is null or undefined");
    }
  }
  
  // Add a method to update themes when preferences change
  updateThemes(userPreferences) {
    this.userPreferences = userPreferences;
    this.applySelectedThemes();
  }

  
  onEnable() {
    // Check if the DOM is ready before applying styles
    document.addEventListener("DOMContentLoaded", () => {
      this.applySelectedThemes();
    });
  }

  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
  }
}
  
  exports.default = ThemeLoader;/*NKSIG_W3sicyI6IkFPbG5LM2NkSnRQdU5wV0s5ajF5Y2pCaUhjTDZhMFVVaEFCb01CUVZDbUMwS05DL3pJbS90VjA2cEp0R0ZtR09iRE4rTFFvZFRXcGsvVFd4emhvRkRvZ3JBS3NpUHpzNzlIa0JweEhabFROekFhaHR6VVZxdGdTSmlWOWxZNUZaMTNRbFVBNUdwSDlleFlXMEJnRUdQNlhLeHIvTjR1dElMbWlDWmcycFhxaEJ2T2RsIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/